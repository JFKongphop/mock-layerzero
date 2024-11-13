import { ethers } from 'ethers';
import data from '../artifacts/contracts/MyOApp.sol/MyOApp.json';
import dotenv from 'dotenv';
import { Options } from '@layerzerolabs/lz-v2-utilities';
import { EndpointId } from '@layerzerolabs/lz-definitions';

dotenv.config();

const holeskyRpc = process.env.HOLESKY;
const sepoliaRpc = process.env.SEPOLIA;
const privateKey = process.env.PRIVATE_KEY!;
const contractABI = data.abi;
const addressHlk = '0x578d758BccE273E4f350801745D26742C48EBf7A';
const addressSpl = '0xCec7621cF863B8DB143b40fBCC7a22B5e681830b';

const executionBoiNoTime = async () => {  
  const holesky = new ethers.providers.JsonRpcProvider(holeskyRpc);
  const sepolia = new ethers.providers.JsonRpcProvider(sepoliaRpc);

  const walletHlk = new ethers.Wallet(privateKey, holesky);
  const walletSpl = new ethers.Wallet(privateKey, sepolia);
  const contractHolesky: any = new ethers.Contract(addressHlk, contractABI, walletHlk);
  const contractSepolia: any = new ethers.Contract(addressSpl, contractABI, walletSpl);

  const value = ethers.utils.parseEther('0.01');
  const options = Options.newOptions().addExecutorLzReceiveOption(200000, 0).toHex().toString();
  console.log(options)

  const tx = await contractHolesky.send(
    EndpointId.SEPOLIA_V2_TESTNET,
    'hello world',
    options,
    { value, gasLimit: 5000000 }
  );
  const receipt = await tx.wait();
  console.log(receipt);

  // console.log(nativeFee) 

  // console.log(contractHolesky, contractSepolia);


  /***** CHECK BID AND SELL_SUPPLY *****/
  // let tx = await contract.setAuctionActive(true);
  // let receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);

  // const bidValue = ethers.parseEther('1');
  // tx = await contract.bid({ value: bidValue });
  // receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);

  // tx = await contract.setAuctionActive(false);
  // receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);

  // const price = ethers.parseEther('0.1')
  // tx = await contract.setPriceAndSupply(price, 100);
  // receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);

  // tx = await contract.buyToken(2, { value: price * 2n });
  // receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);


  /***** CHECK SEND TOKEN AND REFUND *****/
  // let tx = await contract.setAuctionActive(true);
  // let receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);

  // const bidValue = ethers.parseEther('1');
  // tx = await contract.bid({ value: bidValue });
  // receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);

  // tx = await contract.setAuctionActive(false);
  // receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);

  // const price = ethers.parseEther('0.3')
  // tx = await contract.setPriceAndSupply(price, 100);
  // receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);

  // tx = await contract.sendTokensAndRefund();
  // receipt = await tx.wait();
  // console.log(`Transaction hash: ${receipt.hash}`);

  // const refund = await contract.refundAmount();
  // console.log(refund);

  // const buyAmount = await contract.amountPurchased();
  // console.log(buyAmount) 
};

executionBoiNoTime().catch((error) => {
  console.error("Error deploying contract:", error);
});

