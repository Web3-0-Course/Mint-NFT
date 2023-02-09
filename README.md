# MINT NFT with Web3 and Alchemy

*🔼 Firstly Initialize a node project*

```
npm init -y

```

#### 🚀 Install hardhat locally and initialize it

```
npm install hardhat 

npx hardhat

```

#### 🐩 Install openzeppelin/contracts for using in our smart contract

```
npm install @openzeppelin/contracts

```


#### 🗜️ Compile the contract

```
npx hardhat compile

```


#### 🖇️ Deploy the contract

```
npx hardhat --network goerli run script/deploy.js

```

##### 🏃‍♂️Install Alchemy enchanced web3 library

```
npm install @alch/alchemy-web3

```

#### 🔐 Finally mint the nft by running

```
node script/mint-nft.js

```

#### As of now goerli is down! We will re-check in 3 hours