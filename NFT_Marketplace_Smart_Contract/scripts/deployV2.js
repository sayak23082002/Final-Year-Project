const { ethers, upgrades } = require("hardhat");

async function main() {
    const NFT2 = await ethers.getContractFactory("NFT_Marketplace2");
    console.log("Marketplace version 2 is upgrading ... ");
    await upgrades.upgradeProxy("0xB2eC2f82658884c9999487030518742D9Acd69aE", NFT2);
    console.log("Marketplace version 2 is now on.");
}

main();

//npx hardhat --network sepolia run scripts/deployV2.js