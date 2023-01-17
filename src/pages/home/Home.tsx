import { useUserTasks } from './hooks';
import { useAuthRedirect } from '../../shared/hooks';
import { Navbar, TasksArea } from './components';
import { Container } from '@mui/material';

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
