import axios from 'axios';

const apiEndPoint = 'https://back-end-i-api.vercel.app/';

const instance = axios.create({
	baseURL: apiEndPoint,
});

export default instance;
