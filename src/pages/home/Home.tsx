import { useAuthRedirect, useAppDispatch } from '../../shared/hooks';
import { useUserTasks } from './hooks';
import { useState } from 'react';
import { handleCreateTask, handleDeleteTask } from './functions';

const Home = () => {
	useAuthRedirect('home');

	const userTasks = useUserTasks();
	const [content, setContent] = useState('');

	const dispatch = useAppDispatch();

	return (
		<>
			{userTasks &&
				userTasks.map((task) => {
					return (
						<div key={task.uid}>
							<p>{task.content}</p>
							<button
								onClick={() =>
									handleDeleteTask(task.uid, dispatch)
								}
							>
								Deletar
							</button>
						</div>
					);
				})}

			<form
				onSubmit={(e) => {
					handleCreateTask(e, content, setContent, dispatch);
				}}
			>
				<input
					id='content'
					type='text'
					onChange={(e) => setContent(e.target.value)}
					value={content}
				/>
				<button type='submit' disabled={!!content ? false : true}>
					Adicionar task
				</button>
			</form>
		</>
	);
};

export default Home;
