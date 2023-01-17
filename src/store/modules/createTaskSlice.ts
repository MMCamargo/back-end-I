import { IDefaultResponse, ITask } from '../../shared/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doPost } from '../../services';
import { BackEndIState } from '../rootReducer';

const initialState: IDefaultResponse = {
	success: true,
};

const createTaskThunk = createAsyncThunk<IDefaultResponse, Partial<ITask>>(
	'/addTask',
	async (data) => {
		const response: IDefaultResponse = await doPost('/task', data);

		return response;
	}
);

const createTaskSlice = createSlice({
	name: 'createTaskSlice',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(createTaskThunk.fulfilled, (state, action) => {
			const { success, message, data } = action.payload;

			state.success = success;
			state.message = message;
			state.data = data;
		});

		builder.addCase(createTaskThunk.rejected, (state, action) => {
			state.success = false;
			state.message = action.error.message;
			state.data = null;
		});
	},
});

export { createTaskThunk };

export const {} = createTaskSlice.actions;

export const createTaskSliceSelectAll = (state: BackEndIState) =>
	state.createTaskSlice;

export default createTaskSlice.reducer;
