import { MyAction } from "../MyAction";

export class AppStarted extends MyAction {
  type = AppStarted.type;

  static type: "APP_STARTED" = "APP_STARTED";

  constructor() {
    super();
  }
}
