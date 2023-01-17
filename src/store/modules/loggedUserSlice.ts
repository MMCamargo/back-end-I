import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { BackEndIState } from '../rootReducer';

interface ILoggedUser {
	uid: string;
	firstName: string;
}

const initialState: ILoggedUser | null = null;

const loggedUserSlice = createSlice({
	name: 'loggedUserSlice',
	initialState,
	reducers: {
		setLoggedUser: (state, action) => {
			state = action.payload;

			window.localStorage.setItem('loggedUser', JSON.stringify(state));
		},
		removeLoggedUser: (state) => {
			state = null;

			window.localStorage.removeItem('loggedUser');
		},
	},
});

export const { setLoggedUser, removeLoggedUser } = loggedUserSlice.actions;

export const loggedUserSliceSelectAll = (state: BackEndIState) =>
	state.loggedUserSlice;

export default loggedUserSlice.reducer;
