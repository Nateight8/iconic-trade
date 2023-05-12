const mongoose = require("mongoose")

const paymentSchema = mongoose.Schema({  
  user_id: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId
  },
  status: {
    type: String,
    required: true
  },
  reference: {
    type: String,
    unique: true,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paystack_amount: {
    type: Number,
    required: true
  },
  paid_at: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  channel: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  plan: {
    type: String,
    required: true
  },
  fees: {
    type: String,
    required: true
  },
  authorization_code: {
    type: String,
    required: true
  },
  last4: {
    type: String,
    required: true
  },
  card_type: {
    type: String,
    required: true
  },
  bank: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  }
})

const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment