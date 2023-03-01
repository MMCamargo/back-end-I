import axios from 'axios';

const apiEndPoint = 'http://localhost:8081/';

const instance = axios.create({
	baseURL: apiEndPoint,
});

export default instance;
