import { useAuthRedirect } from '../../shared/hooks';

const Home = () => {
	useAuthRedirect('home');

	return <></>;
};

export default Home;
