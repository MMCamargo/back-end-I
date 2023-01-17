import {
	createTaskSlice,
	loggedUserSlice,
	updateTaskSlice,
	userTasksSlice,
} from './modules';
import { combineReducers } from '@reduxjs/toolkit';

const reducers = {
	createTaskSlice,
	loggedUserSlice,
	updateTaskSlice,
	userTasksSlice,
};

const rootReducer = combineReducers({
	...reducers,
});

export default rootReducer;

export type BackEndIState = ReturnType<typeof rootReducer>;
