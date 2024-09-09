const { ethers, upgrades } = require("hardhat");
require("dotenv").config();

async function main() {
    const NFT2 = await ethers.getContractFactory("NFT_Marketplace2");
    console.log("Marketplace version 2 is upgrading ... ");
    await upgrades.upgradeProxy(`${process.env.DEPLOYED_ADDRESS}`, NFT2);
    console.log("Marketplace version 2 is now on.");
}

main();

//npx hardhat --network sepolia run scripts/deployV2.js

//npx hardhat --network localhost run scripts/deployV2.js