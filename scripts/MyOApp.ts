const { ethers, assert } = require("ethers");
const dotenv = require('dotenv');
const data = require('../artifacts/contracts/BoiNoTime.sol/BoiNoTime.json');
dotenv.config();

const providerURL = process.env.HOLESKY;
const privateKey = process.env.PRIVATE_KEY;
const contractABI = data.abi;
const contractAddress = '0x84805C6AC2035F7650d657C7eE4fdFc2c62a7635';

const executionBoiNoTime = async () => {  
  const provider = new ethers.JsonRpcProvider(providerURL);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, contractABI, wallet);

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

