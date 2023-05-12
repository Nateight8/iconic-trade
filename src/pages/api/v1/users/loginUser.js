import * as  bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import connectDB from '../../../../../lib/dbConnect';
import User from '../../../../../models/user';

dotenv.config()


const { sign } = jwt;
const { compare } = bcrypt;

const { TOKEN_KEY } = process.env;

const handler = async (req, res) => {
  if (req.method === 'POST') {
      try {
        // Get user input
        const { email, password } = req.body;
        

        // Validate user input
        if (!(email && password)) {
          return res.status(400).send("All input is required");
        }

        const existingUser = await User.findOne({ email: email.toLowerCase() });

        if (existingUser && (await compare(password, existingUser.password))) {

          // Create token
        const authToken = await sign(
          { user_id: existingUser._id.toString(), email },
          TOKEN_KEY,
          {
            expiresIn: "2h",
          }
          );

          const userData = {
            authToken,
            user_id: existingUser._id.toString(),
            email
          };
          

          // user
          return res.status(201).json(userData);
        }
        return res.status(401).send("Invalid Credentials");

      } catch (error) {
        return res.status(500).send(error.message);
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);