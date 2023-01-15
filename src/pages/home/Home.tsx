import { useAuthRedirect } from '../../shared/hooks';
import { useUserTasks } from './hooks';
import { Container } from '@mui/material';
import { Navbar, TasksArea } from './components';

const Home = () => {
	useAuthRedirect('home');

	const userTasks = useUserTasks();

	return (
		<Container>
			<Navbar />
			<TasksArea tasks={userTasks} />
		</Container>
	);
};

export default Home;
