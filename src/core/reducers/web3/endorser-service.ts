import { AllActions, GetEndorsementsFileRequest } from "../../actions";
import {
  GetEndorsementsRequest,
  GetEndorsementsRequestFailed,
  GetEndorsementsRequestSucceeded
} from "../../actions/web3/endorser-service";

export interface StateType {
  search: {
    item:
      | {
          type: "string";
          value: string;
        }
      | {
          type: "file";
          title: string;
          value: File;
          previewUrl?: string;
        }
      | { type: "init" };
    hash?: string;
  };
  endorsements:
    | {
        state: "LOADED";
        value: string[];
      }
    | { state: "PENDING" }
    | { state: "INIT" }
    | { state: "ERROR"; error: string };
}

export const initial: StateType = {
  search: { item: { type: "init" } },
  endorsements: { state: "INIT" }
};

export const reducer = (state = initial, action: AllActions): StateType => {
  switch (action.type) {
    case GetEndorsementsFileRequest.type:
      let item: StateType["search"]["item"];
      if (typeof action.file === "string") {
        item = {
          type: "string",
          value: action.file
        };
      } else {
        console.log(action.file.type);
        item = {
          type: "file",
          value: action.file,
          title: action.file.name,
          previewUrl: action.file.type.startsWith("image/")
            ? (<{ preview?: string }>action.file).preview
            : undefined
        };
      }
      return {
        ...state,
        search: { item: item },
        endorsements: { state: "PENDING" }
      };

    case GetEndorsementsRequest.type:
      return {
        ...state,
        search: { ...state.search, hash: action.hash },
        endorsements: { state: "PENDING" }
      };

    case GetEndorsementsRequestFailed.type:
      return {
        ...state,
        endorsements: { state: "ERROR", error: action.error }
      };

    case GetEndorsementsRequestSucceeded.type:
      return {
        ...state,
        endorsements: { state: "LOADED", value: action.endorsements }
      };
  }
  return state;
};
