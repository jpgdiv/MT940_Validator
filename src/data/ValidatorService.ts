import { ITransactionValidationResponse } from "../../entities/Transaction";
import { SERVICE_DOMAINS, validationEndpoints } from "./domain";
import { postRequestBuilder } from "./util";

export const postRecordProjectsUrl =
  SERVICE_DOMAINS.VALIDATION_DOMAIN + validationEndpoints.record;

export const postRecord = () =>
  postRequestBuilder<ITransactionValidationResponse, File>(
    postRecordProjectsUrl,
  );
