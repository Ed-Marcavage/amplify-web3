const {
    frontEndContractsFile,
    frontEndAbiFile,
} = require("../helper-hardhat-config")
const fs = require("fs")
const { network } = require("hardhat")

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Writing to front end...")
        await updateContractAddresses()
        await updateAbi()
        console.log("Front end written!")
    }
}

async function updateAbi() {
    const BasicNft = await ethers.getContract("BasicNft")
    fs.writeFileSync(
        frontEndAbiFile,
        BasicNft.interface.format(ethers.utils.FormatTypes.json)
    )
}

async function updateContractAddresses() {
    const BasicNft = await ethers.getContract("BasicNft")
    const contractAddresses = JSON.parse(
        fs.readFileSync(frontEndContractsFile, "utf8")
    )
    if (network.config.chainId.toString() in contractAddresses) {
        if (
            !contractAddresses[network.config.chainId.toString()].includes(
                BasicNft.address
            )
        ) {
            contractAddresses[network.config.chainId.toString()].push(
                BasicNft.address
            )
        }
    } else {
        contractAddresses[network.config.chainId.toString()] = [
            BasicNft.address,
        ]
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}
module.exports.tags = ["all", "frontend"]
