import { parse } from "@fast-csv/parse";
import {
  ITransaction,
  ITransactionValidationResponse,
} from "../../../entities/Transaction";
import validateBalance from "../Validators/validateBalance";
import validateRecordkeys from "../Validators/validateRecordkeys";
import validateReference from "../Validators/validateReference";

export default function csvRecordProcessor(file: Express.Multer.File) {
  const validRecords: ITransaction[] = [];
  const notUniqeRecord: ITransaction[] = [];
  const unvalidBalanceRecord: ITransaction[] = [];

  const stream = parse({ headers: true })
    .on("error", (error) => console.error(error))
    .on("data", (row) => {
      const transaction = validateRecordkeys(row);
      const isUniqueReferenceId = validateReference(validRecords, transaction);
      const isValidBalance = validateBalance(transaction);

      if (!isUniqueReferenceId) {
        notUniqeRecord.push(transaction);
      }
      if (!isValidBalance) {
        unvalidBalanceRecord.push(transaction);
      }
      if (isUniqueReferenceId && isValidBalance) {
        validRecords.push(transaction);
      }
    })
    .on("end", () => {});

  return new Promise<ITransactionValidationResponse>((response) => {
    stream.write(file.buffer);
    stream.end(() => {
      const result: ITransactionValidationResponse = {
        validTransActions: validRecords,
        failedReference: notUniqeRecord,
        failedBalance: unvalidBalanceRecord,
      };
      response(result);
    });
  });
}
