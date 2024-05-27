// async function main() {
//   const MyNFT = await ethers.getContractFactory("NFT_Marketplace");

//   // Start deployment, returning a promise that resolves to a contract object
//   const myNFT = await MyNFT.deploy();
//   console.log("Contract deployed to address:", myNFT);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

const { ethers, upgrades } = require("hardhat");
require("dotenv").config();

// let, var, const

async function main() {
  // const gas = await ethers.provider.getGasPrice();
  const MyNFT = await ethers.getContractFactory("NFT_Marketplace");
  console.log("Deploying NFT Marketplace version 1 ...");
  const nft = await upgrades.deployProxy(MyNFT, [1500000000000000], {
    // gasPrice: 3000000,
    initializer: "initialize",
  });
  await nft.waitForDeployment();
  console.log("NFT Marketplace deployed address ", await nft.getAddress());
  // console.log("NFT Marketplace deployed address ", nft.address);
  console.log("NFT Marketplace deployed address ", nft);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //npx hardhat --network sepolia run scripts/deploy.js
  
  //npx hardhat --network localhost run scripts/deploy.js