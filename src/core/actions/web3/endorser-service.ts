import { MyAction } from "../MyAction";

export class AddEndorsementFileRequest extends MyAction {
  type = AddEndorsementFileRequest.type;

  static type: "ADD_ENDORSEMENT_FILE_REQUEST" = "ADD_ENDORSEMENT_FILE_REQUEST";
  file: File | string;
  constructor(file: File | string) {
    super();
    this.file = file;
  }
}

export class AddEndorsementRequest extends MyAction {
  type = AddEndorsementRequest.type;

  static type: "ADD_ENDORSEMENT_REQUEST" = "ADD_ENDORSEMENT_REQUEST";
  hash: string;
  constructor(hash: string) {
    super();
    this.hash = hash;
  }
}

export class GetEndorsementsFileRequest extends MyAction {
  type = GetEndorsementsFileRequest.type;

  static type: "GET_ENDORSEMENT_FILE_REQUEST" = "GET_ENDORSEMENT_FILE_REQUEST";
  file: File | string;
  constructor(file: File | string) {
    super();
    this.file = file;
  }
}

export class GetEndorsementsRequest extends MyAction {
  type = GetEndorsementsRequest.type;

  hash: string;
  static type: "GET_ENDORSEMENTS_REQUEST" = "GET_ENDORSEMENTS_REQUEST";
  constructor(hash: string) {
    super();
    this.hash = hash;
  }
}

export class AddEndorsementRequestFailed extends MyAction {
  type = AddEndorsementRequestFailed.type;

  static type: "ADD_ENDORSEMENT_REQUEST_FAILED" = "ADD_ENDORSEMENT_REQUEST_FAILED";
  error: any;
  hash: string;
  constructor(e: any, hash: string) {
    super();
    this.error = e;
    this.hash = hash;
  }
}

export class GetEndorsementsRequestFailed extends MyAction {
  type = GetEndorsementsRequestFailed.type;

  static type: "GET_ENDORSEMENTS_REQUEST_FAILED" = "GET_ENDORSEMENTS_REQUEST_FAILED";

  error: any;
  hash: string;
  constructor(e: any, hash: string) {
    super();
    this.error = e;
    this.hash = hash;
  }
}

export class AddEndorsementRequestSucceeded extends MyAction {
  type = AddEndorsementRequestSucceeded.type;

  static type: "ADD_ENDORSEMENT_REQUEST_SUCCEEDED" = "ADD_ENDORSEMENT_REQUEST_SUCCEEDED";
  hash: string;
  constructor(hash: string) {
    super();
    this.hash = hash;
  }
}

export class GetEndorsementsRequestSucceeded extends MyAction {
  type = GetEndorsementsRequestSucceeded.type;

  static type: "GET_ENDORSEMENTS_REQUEST_SUCCEEDED" = "GET_ENDORSEMENTS_REQUEST_SUCCEEDED";
  hash: string;
  endorsements: string[];

  constructor(hash: string, endorsements: string[]) {
    super();
    this.hash = hash;
    this.endorsements = endorsements;
  }
}
