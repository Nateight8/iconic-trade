import connectDB from '../../../../../lib/dbConnect';
import Payment from '../../../../../models/payment';

const { SECRET_KEY } = process.env;

const handler = async (req, res) => {
  if (req.method === 'POST') {
      try {
        const user = req.headers["id"];
        const { reference } = req.body;
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
          headers: {
            Authorization: SECRET_KEY
          }
        })

        const dt = await response.json();
        const data = dt.data;
        const authorization = data.authorization;
        
        const paid = await Payment.findOne({
          reference: data.reference
        })

        if (!paid) {
          let newPayment = new Payment({
            user_id: user,
            status: data.status,
            reference: data.reference,
            amount: data.amount / 100,
            paystack_amount: data.amount,
            paid_at: data.paid_at,
            created_at: data.created_at,
            channel: data.channel,
            currency: data.currency,
            plan: data.metadata.plan,
            fees: data.fees,
            authorization_code: authorization.authorization_code,
            last4: authorization.last4,
            card_type: authorization.card_type,
            bank: authorization.bank,
            country_code: authorization.country_code
          });

          await newPayment.save();
        }

        return res.status(200).send({
          status: data.status,
          reference: data.reference,
          amount: data.amount,
          paid_at: data.paid_at,
          currency: data.currency,
          plan: data.metadata.plan
        })
        
      } catch (error) {
        return res.status(500).send(error.message);
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
