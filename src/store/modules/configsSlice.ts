import { IUser } from '../../shared/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

interface IConfigs {
	loggedUser: Partial<IUser> | null;
}

const initialState: IConfigs = {
	loggedUser: null,
};

const configsSlice = createSlice({
	name: 'configsSlice',
	initialState,
	reducers: {
		setLoggedUser: (state, action: PayloadAction<Partial<IUser>>) => {
			state = {
				...state,
				loggedUser: action.payload,
			};

			window.localStorage.setItem('loggedUser', JSON.stringify(state));
		},
		removeLoggedUser: (state) => {
			state = { ...state, loggedUser: null };

			window.localStorage.removeItem('loggedUser');
		},
	},
});

export const { setLoggedUser } = configsSlice.actions;

export const configsSliceSelectAll = (state: RootState) => state.configsSlice;

export default configsSlice.reducer;
