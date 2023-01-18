import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../shared/hooks';
import { handleSearchTask } from '../../functions';
import { getUserTasksThunk } from '../../../../store/modules/userTasksSlice';
import { IUser } from '../../../../shared/interfaces';
import { Box, Button, TextField } from '@mui/material';

const SearchTask = () => {
	const dispatch = useAppDispatch();

	const [searchText, setSearchText] = useState('');

	const { uid }: Partial<IUser> = JSON.parse(
		window.localStorage.getItem('loggedUser')!
	);

	useEffect(() => {
		if (!searchText) {
			dispatch(getUserTasksThunk(uid!));
		}
	}, [searchText]);

	return (
		<Box sx={{ display: 'flex', gap: 2 }}>
			<TextField
				label='Pesquisar'
				onChange={(e) => setSearchText(e.target.value)}
				size='small'
				value={searchText}
				variant='outlined'
			/>
			<Button
				disabled={!!searchText ? false : true}
				onClick={() => handleSearchTask(searchText, dispatch)}
				variant='contained'
			>
				Pesquisar
			</Button>
		</Box>
	);
};

export default SearchTask;
