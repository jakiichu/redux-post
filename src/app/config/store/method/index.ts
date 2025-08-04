import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
} from "react-redux";
import type { RootState } from "../interface";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch: AppDispatch = useDispatch;

export { useAppDispatch, useAppSelector };
