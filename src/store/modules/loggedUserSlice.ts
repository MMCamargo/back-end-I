import { IUser } from '../../shared/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

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

export const { setLoggedUser } = loggedUserSlice.actions;

export const loggedUserSliceSelectAll = (state: RootState) =>
	state.loggedUserSlice;

export default loggedUserSlice.reducer;
