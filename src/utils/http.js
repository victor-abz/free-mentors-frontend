import axios from 'axios';

const token = localStorage.getItem('token');
export default axios.create({
  baseURL: 'https://free-mentors-adc.herokuapp.com/',
  headers: {
    authorization: token || localStorage.token,
    token: token || localStorage.token,
    'Access-Control-Allow-Origin': '*',
    contentType: 'application/json',
    accept: 'application/json',
  },
});
