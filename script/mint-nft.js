require("dotenv").config()

const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY



const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
//console.log(JSON.stringify(contract.abi))

const contractAddress = "0xAe2515412f20205E61B6e9eD8f01fE04d8BBb9a4"
// web3 initialization

const web3 = createAlchemyWeb3(API_URL)

const nftContract = new web3.eth.Contract(contract.abi, contractAddress);


const mintNFT = async ( tokenURI  ) => {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY,'latest');

    // the transaction
    const tx = {
        'from': PUBLIC_KEY,
        'to' : contractAddress,
        'nonce' : nonce,
        'gas' : 22604,
        'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    }
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    signPromise
    .then((signedTx) => {
        web3.eth.sendSignedTransaction(
            signedTx.rawTransaction,
            function (err, hash){
                if (!err){
                    console.log("The hash of your transaction is : ", hash, 
                    "\n check Alchemy's Mempool to view the status of your transaction!")
                }
                else {
                    console.log("Something went wrong when submitting your transaction: ", err)
                }
            }
        )
    })
    .catch((e) => {console.error(e)})
}

mintNFT("ipfs://QmViRhW7nUyBG5oSmmmuKistiFQujicUp1mceDgijwg5oN")