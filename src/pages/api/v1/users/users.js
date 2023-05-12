import connectDB from '../../../../../lib/dbConnect';
import User from '../../../../../models/user';

const handler = async (req, res) => {
  if (req.method === 'GET') {
      try {
        const users = await User.find();
        return res.status(200).send(users);
      } catch (error) {
        return res.status(500).send(error.message);
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);