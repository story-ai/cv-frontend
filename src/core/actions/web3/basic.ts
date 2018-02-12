import { MyAction } from "../MyAction";

export class Web3Connected extends MyAction {
  type = Web3Connected.type;

  static type: "WEB3_CONNECTED" = "WEB3_CONNECTED";
}

export class Web3AccountChanged extends MyAction {
  type = Web3AccountChanged.type;

  static type: "WEB3_ACCOUNT_CHANGED" = "WEB3_ACCOUNT_CHANGED";
  account?: string;

  constructor(account?: string) {
    super();
    this.account = account;
  }
}

export class BalanceRequested extends MyAction {
  type = BalanceRequested.type;

  static type: "BALANCE_REQUESTED" = "BALANCE_REQUESTED";
  address: string;

  constructor(address: string) {
    super();
    this.address = address;
  }
}

export class BalanceRequestFailed extends MyAction {
  type = BalanceRequestFailed.type;

  static type: "BALANCE_REQUEST_FAILED" = "BALANCE_REQUEST_FAILED";
  address?: string;
  error: string;

  constructor(address: string | undefined, error: string) {
    super();
    this.address = address;
    this.error = error;
  }
}

export class BalanceRequestSucceeded extends MyAction {
  type = BalanceRequestSucceeded.type;

  static type: "BALANCE_REQUEST_SUCCEEDED" = "BALANCE_REQUEST_SUCCEEDED";
  address: string;
  balance: number;

  constructor(address: string, balance: number) {
    super();
    this.address = address;
    this.balance = balance;
  }
}
