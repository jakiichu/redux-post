import { useAppDispatch, useAppSelector } from "@/app/config/store/method";
import { useEffect, type ReactNode } from "react";
import { fetchPosts } from "../reducer";
import { EStatus } from "@/domain/enum/common/fetch-status";

const PostsPage = (): ReactNode => {
    const dispatch = useAppDispatch();
    const { data, status, error } = useAppSelector((state) => state.posts);

    useEffect(() => {
        if (status === EStatus.IDLE) {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);
    console.log(data);

    return (
        <div className="p-2">
            <div>
                <h2>Посты</h2>
                {status === EStatus.LOADING && <p>Загрузка...</p>}
                {status === EStatus.SUCCEEDED && (
                    <ul>
                        {data.map((post) => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                )}
                {status === EStatus.FAILED && <p>Ошибка: {error}</p>}
            </div>{" "}
        </div>
    );
};

export { PostsPage };
