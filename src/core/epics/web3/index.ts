export { getEthAccount, getEthBalance } from "./web3-epic";

export {
  getStoredNumber,
  setStoredNumber,
  reloadStoredNumber
} from "./storage-service";

export {
  addEndorsement,
  addEndorsementFile,
  getEndorsements,
  getEndorsementsFile,
  reloadOnAddEndorsement
} from "./endorser-service";
