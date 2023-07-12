import Web3 from "web3";
import PolkaBridge from "../abi/PolkaBridge.json";
import Dyleum from "../abi/Dyleum.json"
import $Storm from "../abi/$Storm.json"
import PolkaBridgeStaking from "../abi/PolkaBridgeStaking.json";
import PolkaBridgeStakingMatic from "../abi/polkabridgeStakingMatic.json";
import CorgibStaking from "../abi/CorgibStaking.json";
import NautilusStaking from "../abi/nautilusStaking.json"
import PolgonZkevmStaking from "../abi/polygonEVMStaking.json"
import { ankrRpc, STAKE_ADDRESSES } from "../../constants";
import { isMetaMaskInstalled } from "../../utils/helper";
import config from "../../utils/config";

// export const erc20TokenContract = (chainId, tokenAddress, library) => {
//   const abi = PolkaBridge;
//   const connection = getCurrentConnection(chainId, abi, tokenAddress);
//   return connection;
// };
export const erc20TokenContract = (chainId, tokenAddress, library) => {
  const abi = $Storm;
  const connection = getCurrentConnection(chainId, abi, tokenAddress);
  return connection;
};

  // if (chainId?.toString() === "56") {
  //   const address = STAKE_ADDRESSES?.[chainId];

  //   const abi = CorgibStaking;
  //   const connection = getCurrentConnection(chainId, abi, address);
  //   return connection;
  // } else if (chainId?.toString() === "137") {
    export const stakeContract = (chainId) => {
     if (chainId?.toString() === "91002") {
    const address = STAKE_ADDRESSES?.[chainId];

    const abi = NautilusStaking;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
  } else if (chainId?.toString() === "1442") {
    const address = STAKE_ADDRESSES?.[chainId];
    const abi = PolgonZkevmStaking;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;

  } else if (chainId?.toString() === "137") {
    const address = STAKE_ADDRESSES?.[chainId];
    const abi = PolkaBridgeStakingMatic;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
  } else if (chainId?.toString() === config.hmyChainMainnet?.toString()) {
    const address = STAKE_ADDRESSES?.[chainId];

    const abi = PolkaBridgeStaking;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
  } else if (chainId?.toString() === "") {
    const address = STAKE_ADDRESSES?.[chainId];
    const abi = PolkaBridgeStaking;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
  } else if (chainId?.toString() === "42161") {
    const address = STAKE_ADDRESSES?.[chainId];
    const abi = PolkaBridgeStaking;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
  } else {
    const address = STAKE_ADDRESSES?.[1];
    const abi = PolkaBridgeStaking;
    const connection = getCurrentConnection(1, abi, address);
    return connection;
  }
}

const getCurrentConnection = (chainId, abi, contractAddress) => {
  const _ankrRpc = ankrRpc?.[chainId];

  const web3 = isMetaMaskInstalled()
    ? new Web3(window.ethereum)
    : new Web3(
        new Web3.providers.HttpProvider(_ankrRpc ? _ankrRpc : ankrRpc[1442, 91002])
      );
  return new web3.eth.Contract(abi, contractAddress);
};
