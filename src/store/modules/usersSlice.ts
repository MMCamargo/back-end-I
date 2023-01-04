import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../shared/interfaces';

const adapter = createEntityAdapter<IUser>({
	selectId: (parameter) => parameter.uid,
});

const usersSlice = createSlice({
	name: 'usersSlice',
	initialState: adapter.getInitialState(),
	reducers: {},
});

export const { selectAll, selectById } = adapter.getSelectors(
	(state: any) => state.usersSlice
);

export const {} = usersSlice.actions;

export default usersSlice.reducer;
