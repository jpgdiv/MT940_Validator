import { postRecord } from "../../../data/ValidatorService";
// redux thunk, react query are normally prefered over data/util.
import { usePostRequestHookBuilder } from "../../../data/util";

export const usePostRecord = () => usePostRequestHookBuilder(postRecord());
