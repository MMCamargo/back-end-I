import { useUserTasks } from './hooks';

const Home = () => {
	const userTasks = useUserTasks();

	return (
		<>
			{userTasks &&
				userTasks.map((task) => {
					return <p>{task.content}</p>;
				})}
		</>
	);
};

export default Home;
