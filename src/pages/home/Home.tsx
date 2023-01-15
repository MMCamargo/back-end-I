import { useAuthRedirect, useAppDispatch } from '../../shared/hooks';
import { useUserTasks } from './hooks';
import { useState } from 'react';
import { handleCreateTask } from './functions';
import { ConditionallyRender } from '../../shared/components';
import {
	LogoutBtn,
	TasksList,
	ArchivedTaskList,
	ShowArchivedsBtn,
} from './components';
import { Button } from '@mui/material';

const Home = () => {
	useAuthRedirect('home');

	const userTasks = useUserTasks();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [showArchiveds, setShowArchiveds] = useState(false);

	const dispatch = useAppDispatch();

	return (
		<>
			<LogoutBtn />

			<ShowArchivedsBtn
				state={showArchiveds}
				setState={setShowArchiveds}
			/>

			<ConditionallyRender
				condition={showArchiveds}
				show={<ArchivedTaskList tasks={userTasks} />}
			/>

			<TasksList tasks={userTasks} />

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
