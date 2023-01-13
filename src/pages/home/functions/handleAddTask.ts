import { doPost } from '../../../services';

const handleAddTask = async (
	e: React.FormEvent<HTMLFormElement>,
	content: string
) => {
	e.preventDefault();

	const { uid } = JSON.parse(window.localStorage.getItem('loggedUser')!);

	// fazer thunk para o post

	// const response = await doPost('/task', { uid, content });
};

export default handleAddTask;
