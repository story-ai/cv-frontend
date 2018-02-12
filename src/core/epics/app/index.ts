import "rxjs";

import { Epic } from "../../../../../comm-frontend/node_modules/redux-observable";
import { AllActions } from "../../actions";
import { AppStarted } from "../../actions/app";
import { StateType } from "../../reducers";

export const initialize: Epic<AllActions, StateType> = (action$, state$) =>
  action$.ofType<AppStarted>(AppStarted.type).mergeMap(() => []);
