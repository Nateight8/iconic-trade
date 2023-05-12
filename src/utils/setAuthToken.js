import axios from 'axios';

const setAuthToken = (token, id) => {
    if (token) {
        axios.defaults.headers.common['x-access-token'] = token;
        axios.defaults.headers.common['id'] = id;
    } else {
        delete axios.defaults.headers.common['x-access-token'];
        delete axios.defaults.headers.common['id'];
    }
}

export default setAuthToken;