async function main(){
    const MyNFT = await ethers.getContractFactory("MyNFT")

    const myNft = await MyNFT.deploy();
    await myNft.deployed();
    console.log("Contract deployed to address : ", myNft.address)
}

main()
.then(() => process.exit(0))
.catch((e) => {
    console.error(e)
    process.exit(1)
})