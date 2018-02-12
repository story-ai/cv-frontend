import "rxjs";

import { Observable } from "rxjs/Observable";
import Web3 = require("web3");

declare const web3: Web3;

export const web3$ = Observable.fromEvent(window, "load")
  .map(() => {
    if (typeof web3 === "undefined") {
      // Fallback to localhost if no web3 injection. We've configured this to
      // use the development console's port by default.
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");

      return new Web3(provider);
    }

    return new Web3(web3.currentProvider);
  })
  .share();
