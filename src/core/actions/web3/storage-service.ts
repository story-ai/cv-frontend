import { MyAction } from "../MyAction";

export class StoreNumberRequest extends MyAction {
  type = StoreNumberRequest.type;

  static type: "STORE_NUMBER_REQUEST" = "STORE_NUMBER_REQUEST";
  number: number;
  constructor(number: number) {
    super();
    this.number = number;
  }
}

export class GetNumberRequest extends MyAction {
  type = GetNumberRequest.type;

  static type: "GET_NUMBER_REQUEST" = "GET_NUMBER_REQUEST";
}

export class StoreNumberRequestFailed extends MyAction {
  type = StoreNumberRequestFailed.type;

  static type: "STORE_NUMBER_REQUEST_FAILED" = "STORE_NUMBER_REQUEST_FAILED";
  error: any;
  constructor(e: any) {
    super();
    this.error = e;
  }
}

export class GetNumberRequestFailed extends MyAction {
  type = GetNumberRequestFailed.type;

  static type: "GET_NUMBER_REQUEST_FAILED" = "GET_NUMBER_REQUEST_FAILED";

  error: any;
  constructor(e: any) {
    super();
    this.error = e;
  }
}

export class StoreNumberRequestSucceeded extends MyAction {
  type = StoreNumberRequestSucceeded.type;

  static type: "STORE_NUMBER_REQUEST_SUCCEEDED" = "STORE_NUMBER_REQUEST_SUCCEEDED";
}

export class GetNumberRequestSucceeded extends MyAction {
  type = GetNumberRequestSucceeded.type;

  static type: "GET_NUMBER_REQUEST_SUCCEEDED" = "GET_NUMBER_REQUEST_SUCCEEDED";
  number: number;

  constructor(number: number) {
    super();
    this.number = number;
  }
}
