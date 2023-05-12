const local = 'http://localhost:3000/api/v1';
const dev = 'https://iconic-trades-backend.herokuapp.com/api/v1';
const temp = '/api/v1';
const prod = '';

const current = 'local';

const inUse = current === 'dev' ? dev : 'local' ? local : 'temp' ? temp : prod;

export const endPoints = {
  createAccountUrl: `${inUse}/users/user`,
  loginUrl: `${inUse}/users/loginUser`,
  googleLoginUrl: `${inUse}/users/googleAuth`,
  userSubscriptionsUrl: `${inUse}/payments/userSubscriptions`,
  verifyPaymentUrl: `${inUse}/payments/verifyPayment`,
};


