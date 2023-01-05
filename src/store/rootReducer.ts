import { configsSlice } from './modules';
import { combineReducers } from '@reduxjs/toolkit';

const reducers = {
	configsSlice,
};

const rootReducer = combineReducers({
	...reducers,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
