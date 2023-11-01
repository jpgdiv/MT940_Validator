import { ITransactionValidationResponse } from "../../entities/Transaction";
import {
  SERVICE_DOMAINS,
  postRequestBuilder,
  validationEndpoints,
} from "./dataService";

export const postRecordProjectsUrl =
  SERVICE_DOMAINS.VALIDATION_DOMAIN + validationEndpoints.record;

export const postRecord = () =>
  postRequestBuilder<ITransactionValidationResponse, File>(
    postRecordProjectsUrl,
  );
