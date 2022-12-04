const networkConfig = {
    31337: {
        name: "localhost",
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
}

const developmentChains = ["hardhat", "localhost"]
const frontEndContractsFile =
    "/Users/edmarcavage/Development/Development/Provenance-UI/src/Pages/Artist/NFT/constants/contractAddresses.json"
const frontEndAbiFile =
    "/Users/edmarcavage/Development/Development/Provenance-UI/src/Pages/Artist/NFT/constants/abi.json"

module.exports = {
    networkConfig,
    developmentChains,
    frontEndContractsFile,
    frontEndAbiFile,
}
