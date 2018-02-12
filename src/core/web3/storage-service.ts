import { web3$ } from "./web3";

const abi = [
  {
    type: "function",
    name: "set",
    inputs: [{ name: "x", type: "uint256" }],
    outputs: [],
    constant: false,
    payable: false,
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "get",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
    constant: true,
    payable: false,
    stateMutability: "view"
  }
];

let contractAddress: string = "0x345ca3e014aaf5dca488057592ee47305d9b3e10";

export const storage$ = web3$.map(web3 => {
  return new web3.eth.Contract(abi, contractAddress);
});
