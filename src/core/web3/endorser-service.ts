import { web3$ } from "./web3";

const abi = [
  {
    type: "function",
    name: "endorse",
    inputs: [
      {
        name: "doc",
        type: "bytes32"
      }
    ],
    outputs: [],
    constant: false,
    payable: false,
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getEndorsements",
    inputs: [
      {
        name: "doc",
        type: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address[]"
      }
    ],
    constant: true,
    payable: false,
    stateMutability: "view"
  }
];

let contractAddress: string = "0x9fbda871d559710256a2502a2517b794b482db40";

export const endorser$ = web3$.map(web3 => {
  return new web3.eth.Contract(abi, contractAddress);
});
