# MINT NFT with Web3 and Alchemy

*πΌ Firstly Initialize a node project*

```
npm init -y

```

#### π Install hardhat locally and initialize it

```
npm install hardhat 

npx hardhat

```

#### π© Install openzeppelin/contracts for using in our smart contract

```
npm install @openzeppelin/contracts

```


#### ποΈ Compile the contract

```
npx hardhat compile

```


#### ποΈ Deploy the contract

```
npx hardhat --network goerli run script/deploy.js

```

##### πββοΈInstall Alchemy enchanced web3 library

```
npm install @alch/alchemy-web3

```

#### π Finally mint the nft by running

```
node script/mint-nft.js

```

#### As of now goerli is down! We will re-check in 3 hours