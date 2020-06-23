import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const transactionIncome: number[] = [];
    const transactionOutcome: number[] = [];

    this.transactions.filter(transaction => {
      if (transaction.type === 'income') {
        return transactionIncome.push(transaction.value);
      }
      return transactionOutcome.push(transaction.value);
    });

    const balanceIncome = transactionIncome.length
      ? transactionIncome.reduce(
          (transaction, currentValue) => transaction + currentValue,
        )
      : 0;

    const balanceOutcome = transactionOutcome.length
      ? transactionOutcome.reduce(
          (transaction, currentValue) => transaction + currentValue,
        )
      : 0;

    const balanceTotal = balanceIncome - balanceOutcome;

    const balance = {
      income: balanceIncome,
      outcome: balanceOutcome,
      total: balanceTotal,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
