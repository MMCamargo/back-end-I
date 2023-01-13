import { loggedUserSlice, userTasksSlice } from './modules';
import { combineReducers } from '@reduxjs/toolkit';

const reducers = {
	loggedUserSlice,
	userTasksSlice,
};

const rootReducer = combineReducers({
	...reducers,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
