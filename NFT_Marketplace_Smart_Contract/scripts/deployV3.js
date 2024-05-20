const { ethers, upgrades } = require("hardhat");

async function main() {
    const NFT3 = await ethers.getContractFactory("NFT_Marketplace3");
    console.log("Marketplace version 3 is upgrading ... ");
    await upgrades.upgradeProxy("0x98F491E939417b7A9df4c9f1Dd4443c3C72dEB61", NFT3);
    console.log("Marketplace version 3 is now on.");
}

main();