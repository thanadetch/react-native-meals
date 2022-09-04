import { AppDispatch } from '../store/redux/store';
import { useDispatch } from 'react-redux';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
