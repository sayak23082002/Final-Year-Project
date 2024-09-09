require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require('@openzeppelin/hardhat-upgrades');
require("@nomicfoundation/hardhat-ethers");
// require('hardhat-contract-sizer');

//for sepolia deployment

const ALCHEMY_API_KEY = process.env.API_URL;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    sepolia: {
      url: ALCHEMY_API_KEY,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`]
    }
  }
};

// for hardhat local node deployment

// module.exports = {
//   solidity: "0.8.9",
// };
