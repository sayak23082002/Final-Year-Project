const { ethers, upgrades } = require("hardhat");

async function main() {
    const NFT2 = await ethers.getContractFactory("NFT_Marketplace2");
    console.log("Marketplace version 2 is upgrading ... ");
    await upgrades.upgradeProxy("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0", NFT2);
    console.log("Marketplace version 2 is now on.");
}

main();

//npx hardhat --network sepolia run scripts/deployV2.js

//npx hardhat --network localhost run scripts/deployV2.js