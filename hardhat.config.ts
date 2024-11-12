// Get the environment configuration from .env file
//
// To make use of automatic environment setup:
// - Duplicate .env.example file and name it .env
// - Fill in the environment variables
import 'dotenv/config';

import 'hardhat-deploy';
import 'hardhat-contract-sizer';
import '@nomiclabs/hardhat-ethers';
import '@layerzerolabs/toolbox-hardhat';
import { HardhatUserConfig, HttpNetworkAccountsUserConfig } from 'hardhat/types';
import { EndpointId } from '@layerzerolabs/lz-definitions';
import "@nomicfoundation/hardhat-verify";

// npx hardhat verify --network holesky 0x578d758BccE273E4f350801745D26742C48EBf7A "0x6EDCE65403992e310A62460808c4b910D972f10f" "0xd73F821fcA522Cbb672F8354d25470DBf4948c9C"

const PRIVATE_KEY = process.env.PRIVATE_KEY!
const accounts: HttpNetworkAccountsUserConfig = [PRIVATE_KEY];

if (accounts == null) {
  console.warn(
    'Could not find MNEMONIC or PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.'
  );
}

const config = {
  paths: {
    cache: 'cache/hardhat',
  },
  solidity: {
    compilers: [
      {
        version: '0.8.22',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },  
  networks: {
    'sepolia-testnet': {
      eid: EndpointId.SEPOLIA_V2_TESTNET,
      url: process.env.SEPOLIA || 'https://rpc.sepolia.org/',
      accounts,
    },
    'avalanche-testnet': {
      eid: EndpointId.AVALANCHE_V2_TESTNET,
      url: process.env.RPC_URL_FUJI || 'https://rpc.ankr.com/avalanche_fuji',
      accounts,
    },
    'amoy-testnet': {
      eid: EndpointId.AMOY_V2_TESTNET,
      url: process.env.RPC_URL_AMOY || 'https://polygon-amoy-bor-rpc.publicnode.com',
      accounts,
    },
    'holesky': {
      eid: EndpointId.HOLESKY_V2_TESTNET,
      url: process.env.HOLESKY || 'https://rpc.holesky.ethpandaops.io',
      accounts,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // wallet address of index[0], of the mnemonic in .env
    },
  },
  etherscan: {
    apiKey: 'JRNS2IIIK5PIH844PAJHBRZ9XHHS62FPKD'
  }
}

export default config;
