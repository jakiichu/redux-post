import './App.css'
import {useEffect} from "react";
import type {IRootStore} from "@/shared/interface/store";
import {postsFetch} from "@/entities/post/list";
import {useAppDispatch, useAppSelector} from "@/shared/lib/store/redux.ts";

const App = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postsFetch({skip: 0, limit: 10}));
    }, [dispatch]);
    const {loading, error, data} = useAppSelector((state: IRootStore) => state.post);
    console.log(loading, error, data)


    return (
        <>

        </>
    )
}

export default App
