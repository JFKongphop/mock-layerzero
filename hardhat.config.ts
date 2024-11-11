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

const PRIVATE_KEY = process.env.PRIVATE_KEY!
const accounts: HttpNetworkAccountsUserConfig = [PRIVATE_KEY];

if (accounts == null) {
  console.warn(
    'Could not find MNEMONIC or PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.'
  );
}

const config: HardhatUserConfig = {
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
}

export default config;
