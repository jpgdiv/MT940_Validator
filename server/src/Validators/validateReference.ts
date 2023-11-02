import { ITransaction } from "../../../entities/Transaction";

export default function validateReference(
  record: Array<ITransaction>,
  transaction: ITransaction
) {
  const transactionExistInRecord =
    record.find((rec) => rec.Reference === transaction.Reference) !== undefined;
  if (transactionExistInRecord) {
    return false;
  } else {
    return true;
  }
}
