import {
	AnyAction,
	CombinedState,
	Dispatch,
	ThunkDispatch,
} from '@reduxjs/toolkit';
import { IDefaultResponse } from '../interfaces';

type TUseAppDispatch = ThunkDispatch<
	CombinedState<{
		loggedUserSlice: null;
		userTasksSlice: IDefaultResponse;
		createTaskSlice: IDefaultResponse;
	}>,
	undefined,
	AnyAction
> &
	Dispatch<any>;

export default TUseAppDispatch;
