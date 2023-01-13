import { useUserTasks } from './hooks';
import { handleAddTask } from './functions';
import { useState } from 'react';

const Home = () => {
	const userTasks = useUserTasks();
	const [content, setContent] = useState('');

	return (
		<>
			{userTasks &&
				userTasks.map((task) => {
					return <p>{task.content}</p>;
				})}

			<form onSubmit={(e) => handleAddTask(e, content)}>
				<input
					id='content'
					type='text'
					onChange={(e) => setContent(e.target.value)}
					value={content}
				/>
				<button type='submit'>Adicionar task</button>
			</form>
		</>
	);
};

export default Home;
