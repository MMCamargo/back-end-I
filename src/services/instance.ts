import axios from 'axios';

const apiEndPoint = 'https://mm-back-end-i-api.vercel.app/';

const instance = axios.create({
	baseURL: apiEndPoint,
});

export default instance;
