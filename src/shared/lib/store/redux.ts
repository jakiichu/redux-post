import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {IRootStore} from "@/shared/interface/store";

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<IRootStore> = useSelector


export {
    useAppDispatch,
    useAppSelector,
}