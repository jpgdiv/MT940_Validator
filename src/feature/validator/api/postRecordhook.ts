import { postRecord } from "../../../data/ValidatorService";
import { usePostRequestHookBuilder } from "../../../data/dataService";

export const usePostRecord = () => usePostRequestHookBuilder(postRecord());
