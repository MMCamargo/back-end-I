import { IDefaultResponse, ITask } from '../../shared/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doPut } from '../../services';
import { RootState } from '../rootReducer';
import { useAppDispatch } from '../../shared/hooks';
import { updateTask } from './userTasksSlice';

const initialState: IDefaultResponse = {
	success: true,
};

const updateTaskThunk = createAsyncThunk<IDefaultResponse, Partial<ITask>>(
	'/updateTask',
	async ({ uid, title, content }) => {
		const response: IDefaultResponse = await doPut(`/task/edit/${uid}`, {
			title,
			content,
		});

		return response;
	}
);

const updateTaskSlice = createSlice({
	name: 'updateTaskSlice',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(updateTaskThunk.fulfilled, (state, action) => {
			const { success, message, data } = action.payload;

			state.success = success;
			state.message = message;
			state.data = data;
		});

		builder.addCase(updateTaskThunk.rejected, (state, action) => {
			state.success = false;
			state.message = action.error.message;
			state.data = null;
		});
	},
});

export { updateTaskThunk };

export const {} = updateTaskSlice.actions;

export const updateTaskSliceSelectAll = (state: RootState) =>
	state.updateTaskSlice;

export default updateTaskSlice.reducer;
