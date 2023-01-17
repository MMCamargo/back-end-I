import { BackEndIState } from '../../store/rootReducer';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<BackEndIState> = useSelector;

export default useAppSelector;
