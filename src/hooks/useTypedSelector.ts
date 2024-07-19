import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

// as per react-redux documentation!
// We are going to use useTypedSelector instead of useSelector in the app!!!
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
