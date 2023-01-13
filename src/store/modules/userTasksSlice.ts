import { IDefaultResponse, ITask } from '../../shared/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { doGet } from '../../services';

const initialState: IDefaultResponse = {
	success: true,
};

const userTasksThunk = createAsyncThunk<IDefaultResponse, string>(
	'/getUserTasks',
	async (userUid) => {
		const response: IDefaultResponse = await doGet(
			`/tasks/user/${userUid}`
		);

		return response;
	}
);

const userTasksSlice = createSlice({
	name: 'userTasksSlice',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(userTasksThunk.fulfilled, (state, action) => {
			const { success, message, data } = action.payload;

			state.success = success;
			state.message = message;
			state.data = data;
		});

		builder.addCase(userTasksThunk.rejected, (state, action) => {
			state.success = false;
			state.message = action.error.message;
			state.data = null;
		});
	},
});

export { userTasksThunk };

export const {} = userTasksSlice.actions;

export const userTasksSliceSelectAll = (state: RootState) =>
	state.userTasksSlice;

export default userTasksSlice.reducer;
