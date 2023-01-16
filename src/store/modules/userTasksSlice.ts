import { IDefaultResponse, ITask } from '../../shared/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { doGet, doPut, doDelete } from '../../services';

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

const archiveTaskThunk = createAsyncThunk<IDefaultResponse, string>(
	'/archiveTask',
	async (taskUid, data) => {
		const response: IDefaultResponse = await doPut(
			`/task/archiving/${taskUid}`,
			data
		);

		return response;
	}
);

const unarchiveTaskThunk = createAsyncThunk<IDefaultResponse, string>(
	'/unarchiveTask',
	async (taskUid, data) => {
		const response: IDefaultResponse = await doPut(
			`/task/archiving/${taskUid}`,
			data
		);

		return response;
	}
);

const deleteTaskThunk = createAsyncThunk<IDefaultResponse, string>(
	'/deleteTask',
	async (taskUid) => {
		const response = await doDelete(`/task/${taskUid}`);

		return response;
	}
);

const userTasksSlice = createSlice({
	name: 'userTasksSlice',
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.data.push(action.payload);
		},
		updateTask: (state, action) => {
			const task = state.data.find(
				(task: ITask) => task.uid === action.payload.uid
			);

			task.title = action.payload.title;
			task.content = action.payload.content;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(userTasksThunk.fulfilled, (state, action) => {
				const { success, message, data } = action.payload;

				state.success = success;
				state.message = message;
				state.data = data;
			})
			.addCase(userTasksThunk.rejected, (state, action) => {
				state.success = false;
				state.message = action.error.message;
				state.data = null;
			})
			.addCase(deleteTaskThunk.fulfilled, (state, action) => {
				const { success, message } = action.payload;

				if (success) {
					state.data = state.data.filter(
						(task: ITask) => task.uid !== action.meta.arg
					);

					state.message = message;
				} else {
					state.success = false;
					state.message = message;
				}
			})
			.addCase(archiveTaskThunk.fulfilled, (state, action) => {
				const { data } = action.payload;

				const archivedTask: ITask = state.data.find(
					(task: ITask) => task.uid === data.uid
				);

				archivedTask.isArchived = true;
			})
			.addCase(unarchiveTaskThunk.fulfilled, (state, action) => {
				const { data } = action.payload;

				const archivedTask: ITask = state.data.find(
					(task: ITask) => task.uid === data.uid
				);

				archivedTask.isArchived = false;
			});
	},
});

export {
	userTasksThunk,
	archiveTaskThunk,
	unarchiveTaskThunk,
	deleteTaskThunk,
};

export const { addTask, updateTask } = userTasksSlice.actions;

export const userTasksSliceSelectAll = (state: RootState) =>
	state.userTasksSlice;

export default userTasksSlice.reducer;
