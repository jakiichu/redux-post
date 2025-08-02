import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../interface";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
