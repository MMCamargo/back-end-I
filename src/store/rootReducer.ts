import { loggedUserSlice, userTasksSlice, createTaskSlice } from './modules';
import { combineReducers } from '@reduxjs/toolkit';

const reducers = {
	loggedUserSlice,
	userTasksSlice,
	createTaskSlice,
};

const rootReducer = combineReducers({
	...reducers,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
