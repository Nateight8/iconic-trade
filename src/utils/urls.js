const local = 'http://localhost:4000/api/v1';
const dev = 'https://iconic-trades-backend.herokuapp.com/api/v1';
const prod = '';

const current = 'local';

const inUse = current === 'dev' ? dev : 'local' ? local  : prod;

export const endPoints = {
  createAccount: {link: `${inUse}/users/user`, method: 'POST'},
  login: { link: `${inUse}/users/loginUser`, method: 'POST' },
  googleLogin: { link: `${inUse}/users/googleAuth`, method: 'POST' },
  userSubscriptions: { link: `${inUse}/payments/userSubscriptions`, method: 'POST' },
  verifyPayment: { link: `${inUse}/payments/verifyPayment`, method: 'POST' },
};


