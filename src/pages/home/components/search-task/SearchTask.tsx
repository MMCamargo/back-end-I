import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../shared/hooks';
import { Box, TextField, Button } from '@mui/material';
import { handleSearchTask } from '../../functions';
import { userTasksThunk } from '../../../../store/modules/userTasksSlice';
import { IUser } from '../../../../shared/interfaces';

const SearchTask = () => {
	const [searchText, setSearchText] = useState('');

	const { uid }: Partial<IUser> = JSON.parse(
		window.localStorage.getItem('loggedUser')!
	);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!searchText) {
			dispatch(userTasksThunk(uid!));
		}
	}, [searchText]);

	return (
		<Box>
			<TextField
				label='Pesquisar'
				size='small'
				variant='outlined'
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<Button onClick={() => handleSearchTask(searchText, dispatch)}>
				Pesquisar
			</Button>
		</Box>
	);
};

export default SearchTask;
