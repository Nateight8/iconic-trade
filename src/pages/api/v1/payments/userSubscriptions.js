import connectDB from '../../../../../lib/dbConnect';
import Payment from '../../../../../models/payment';


const handler = async (req, res) => {
  if (req.method === 'GET') {
      try {
        const user = req.headers["id"];

        const data = await Payment.find({ user_id: user });
        
        res.status(200).json(data);

      } catch (error) {
        return res.status(500).send(error.message);
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);