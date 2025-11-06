import {useSelector} from "react-redux";
import {store} from "../store.ts";

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
// useAppSelector takes state from the store and from each slice collect each typing and will type it automatically
