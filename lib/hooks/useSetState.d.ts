type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A, callback?: Function) => void;
declare const useSetState: <S>(initialState: S) => [S, Dispatch<SetStateAction<S>>];
export default useSetState;
