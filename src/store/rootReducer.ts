import {
	loggedUserSlice,
	userTasksSlice,
	createTaskSlice,
	updateTaskSlice,
} from './modules';
import { combineReducers } from '@reduxjs/toolkit';

const reducers = {
	loggedUserSlice,
	userTasksSlice,
	createTaskSlice,
	updateTaskSlice,
};

const rootReducer = combineReducers({
	...reducers,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
