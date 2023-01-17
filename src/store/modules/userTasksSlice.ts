import { doDelete, doGet, doPost, doPut } from '../../services';
import { BackEndIState } from '../rootReducer';
import { IDefaultResponse, ITask } from '../../shared/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

type TSearchUserTasksData = { userUid: string; text: string };

const initialState: IDefaultResponse = {
	success: true,
};

const createTaskThunk = createAsyncThunk(
	'task/post',
	async (data: Partial<ITask>, { dispatch }) => {
		const response: AxiosResponse = await doPost('/task', data);

		if (response.status !== 201) {
			return;
		} else dispatch(getUserTasksThunk(data.userUid!));
	}
);

const getUserTasksThunk = createAsyncThunk(
	'tasks/user/get',
	async (userUid: string) => {
		const response: AxiosResponse = await doGet(`/tasks/user/${userUid}`);

		if (response.status !== 200) {
			return;
		} else return response.data;
	}
);

const searchUserTasksThunk = createAsyncThunk(
	'tasks/user/search',
	async ({ userUid, text }: TSearchUserTasksData) => {
		const response: AxiosResponse = await doGet(
			`/tasks/search/${userUid}?text=${text}`
		);

		if (response.status !== 200) {
			return;
		} else return response.data;
	}
);

const updateTaskThunk = createAsyncThunk(
	'task/update',
	async ({ userUid, uid, title, content }: Partial<ITask>, { dispatch }) => {
		const response: AxiosResponse = await doPut(`/task/edit/${uid}`, {
			title,
			content,
		});

		if (response.status !== 200) {
			return;
		} else return dispatch(getUserTasksThunk(userUid!));
	}
);

const toggleArchiveTaskThunk = createAsyncThunk(
	'task/archive',
	async ({ userUid, uid }: Partial<ITask>, { dispatch }) => {
		const response: AxiosResponse = await doPut(`/task/archiving/${uid}`);

		if (response.status !== 200) {
			return;
		} else return dispatch(getUserTasksThunk(userUid!));
	}
);

const deleteTaskThunk = createAsyncThunk(
	'/deleteTask',
	async ({ userUid, uid }: Partial<ITask>, { dispatch }) => {
		const response: AxiosResponse = await doDelete(`/task/${uid}`);

		if (response.status !== 200) {
			return;
		} else return dispatch(getUserTasksThunk(userUid!));
	}
);

const userTasksSlice = createSlice({
	name: 'userTasksSlice',
	initialState,
	reducers: {},
	extraReducers({ addCase }) {
		addCase(getUserTasksThunk.fulfilled, (state, { payload }) => {
			const { success, message, data } = payload;

			state.success = success;
			state.message = message;
			state.data = data;
		});

		addCase(searchUserTasksThunk.fulfilled, (state, { payload }) => {
			const { success, message, data } = payload;

			state.success = success;
			state.message = message;
			state.data = data;
		});
	},
});

export {
	createTaskThunk,
	deleteTaskThunk,
	getUserTasksThunk,
	searchUserTasksThunk,
	toggleArchiveTaskThunk,
	updateTaskThunk,
};

export const {} = userTasksSlice.actions;

export const userTasksSliceSelectAll = (state: BackEndIState) =>
	state.userTasksSlice;

export default userTasksSlice.reducer;
