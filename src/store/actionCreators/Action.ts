import { actions } from "./actionCreators";
type FunctionType = (...args: any[]) => any;
type ActionCreatorMapObject = { [actionCreator: string]: FunctionType };
type ActionsUnion<A extends ActionCreatorMapObject> = ReturnType<A[keyof A]>;

type Action = ActionsUnion<typeof actions>;

export default Action;