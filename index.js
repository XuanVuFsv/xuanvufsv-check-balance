const Web3 = require('web3');
const { gweiToEther } = require('ftm-gas-convert');

// Function to check Ethereum wallet balance
async function checkBalance(walletAddress, providerUrl) {
    const web3 = new Web3(providerUrl);
    try {
        const gweiValue = 1000000000; // 1 Gwei
        const etherValue = gweiToEther(gweiValue);
        console.log(etherValue); // Output: 1 Ether
        
        const balance = await web3.eth.getBalance(walletAddress);
        return web3.utils.fromWei(balance, 'ether');
    } catch (error) {
        throw new Error(`Error while fetching balance: ${error.message}`);
    }
}

// Exporting the function
module.exports = {
    checkBalance
};
