import { RootState } from "@/store/root";
import { countActions } from "@/store/slice/counterSlice";
import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";

const Home: NextPage = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.countSlice.count);
    return (
        <>
            <div className="flex flex-col gap-5 justify-center items-center absolute top-0 bottom-0 right-0 left-0">
                <div className="text-3xl">{count}</div>
                <div className="flex gap-2">
                    <div
                        onClick={() => dispatch(countActions.increase())}
                        className="p-3 duration-500 select-none cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-bold"
                    >
                        Increase
                    </div>
                    <div
                        onClick={() => dispatch(countActions.decrease())}
                        className="p-3 duration-500 select-none cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-bold"
                    >
                        Decrease
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
