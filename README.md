# NFT Marketplace using Blockchain Technology
### Under the guidance of Amartya Chakraborty

#### Group No - 19
##### Arpan Basu (201220100110018)
##### Sayak Karui (201220100110039)
##### Soumyak Mitra (211220100120005)
##### Anubhav Routh (211220100120001)

#

NFT Marketplace is an online platform leveraging blockchain to buy, sell, and trade unique digital assets as NFTs.



## Features

- Create your own NFTs
- Categories your own NFTs in different Genres
- Buy and Sell NFTs
- Start Auction for your own NFTs
- Bidding in others NFTs as user




## Tech

This project uses a number of open source projects to work properly:

- [React JS] - HTML enhanced for web apps!
- [Web3 JS] - Collection of libraries that allow to interact with a local or remote Ethereum node
- [Ether JS] - Compact library for interacting with the Ethereum Blockchain and its ecosystem
- [IPFS Storage] - a Protocol, hypermedia and file sharing peer-to-peer network for storing and sharing data in a distributed file system
- [Metamask Wallet] - a software cryptocurrency wallet used to interact with the Ethereum blockchain
- [Node.js] - evented I/O for the backend


## Installation

This Project requires [Node.js](https://nodejs.org/) to run.

Install the Frontend dependencies.

```sh
cd Frontend
npm i
```

Install the Backend dependencies.

```sh
cd NFT_Marketplace_Smart_Contract
npm i
```

For production environments and run local Hardhat Blockchain Network...

```sh
cd NFT_Marketplace_Smart_Contract
npx hardhat node
```

Deploy Smart Contract to local Hardhat Blockchain Network...

```sh
cd NFT_Marketplace_Smart_Contract
npx hardhat --network localhost run scripts/deploy.js
```

Extract the Smart Contract Address and Declare it in Frontend
 For example, 
 ```sh
The Temporary Contract Address:"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
 Declare it in "\Final-Year-Project\Frontend\src\App.js"
 ```
 
![Contract Address](https://github.com/decodeme1412/Final-Year-Project/blob/main/Documentations/Contract_address.PNG)

 Run Frontend React-Server
 
 ```sh
 cd Frontend
npm start
 ```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Alchemy-Web3 | [https://github.com/alchemyplatform/alchemy-sdk-js]|
| Hardhat-Toolbox | [https://github.com/NomicFoundation/hardhat] |
| Bootstrap | [https://github.com/twbs] |
| Ethers | [https://github.com/ethers-io/ethers.js] |




#### Building for source

For production release:

```sh
npm run build
```
