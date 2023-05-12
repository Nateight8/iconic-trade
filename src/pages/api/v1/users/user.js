import * as  bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import connectDB from '../../../../../lib/dbConnect';
import User from '../../../../../models/user';

dotenv.config()

const { sign } = jwt;
const { hash } = bcrypt;

const { TOKEN_KEY } = process.env;

const handler = async (req, res) => {
  if (req.method === 'GET') {
      try {
        const { email } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() });
        return res.status(200).send(user);
      } catch (error) {
        return res.status(500).send(error.message);
      }
  } else if (req.method === 'POST') {
    
      try {
        // Get user input
        const { firstName, lastName, email, password, type = 'user' } = req.body;
        

        // Validate user input
        if (!(email && password && firstName && lastName)) {
          return res.status(400).send("All input is required");
        }

        const existingUser = await User.findOne({ email: email.toLowerCase() });

        if (existingUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        const encryptedPassword = await hash(password, 10);

        // Create user in our database
        const newUser = await User.create({
          first_name: firstName,
          last_name: lastName,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
          type
        });

        // Create token
        const authToken = await sign(
          { user_id: newUser._id.toString(), email },
          TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        // save user token
        const userData = {
          authToken,
          user_id: newUser._id.toString(),
          email
        };

        // return new user
        return res.status(201).json(userData);
      } catch (error) {
        return res.status(500).send(error.message);
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);




exports.createAccount = async (req, res) => { 
  try {

  } catch (error) {
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
}