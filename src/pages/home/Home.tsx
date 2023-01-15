import { useAuthRedirect, useAppDispatch } from '../../shared/hooks';
import { useUserTasks } from './hooks';
import { useState } from 'react';
import {
	handleCreateTask,
	handleDeleteTask,
	handleLogout,
	handleArchiveTask,
	handleUnarchiveTask,
} from './functions';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	useAuthRedirect('home');

	const userTasks = useUserTasks();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<>
			<button onClick={() => handleLogout(dispatch, navigate)}>
				Sair
			</button>

			{userTasks &&
				userTasks
					.filter((tasks) => !tasks.isArchived)
					.map((task) => {
						return (
							<div key={task.uid}>
								<button
									onClick={(e) =>
										handleArchiveTask(task.uid, dispatch)
									}
								>
									arquivar
								</button>
								<p>{task.title}</p>
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

			<p>arquivados abaixo</p>

			{userTasks &&
				userTasks
					.filter((tasks) => tasks.isArchived)
					.map((task) => {
						return (
							<div key={task.uid}>
								<button
									onClick={(e) =>
										handleUnarchiveTask(task.uid, dispatch)
									}
								>
									arquivar
								</button>
								<p>{task.title}</p>
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
					handleCreateTask(
						e,
						title,
						setTitle,
						content,
						setContent,
						dispatch
					);
				}}
			>
				<input
					id='content'
					type='text'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<input
					id='content'
					type='text'
					onChange={(e) => setContent(e.target.value)}
					value={content}
				/>
				<button
					type='submit'
					disabled={!!title && !!content ? false : true}
				>
					Adicionar task
				</button>
			</form>
		</>
	);
};

export default Home;
