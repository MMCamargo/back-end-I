import { IDefaultResponse, ITask } from '../../shared/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doPut } from '../../services';
import { RootState } from '../rootReducer';

const initialState: IDefaultResponse = {
	success: true,
};

const updateTaskThunk = createAsyncThunk<IDefaultResponse, string>(
	'/updateTask',
	async (taskUid, data) => {
		const response: IDefaultResponse = await doPut(
			`/task/edit/${taskUid}`,
			data
		);

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
