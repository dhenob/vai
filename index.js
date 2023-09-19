const Web3 = require('web3');

// Connect to a local Ethereum node
const web3 = new Web3('http://localhost:8545');

// Check if connected
web3.eth.getAccounts().then(accounts => {
    console.log('Connected to Ethereum node!');
    console.log('Available accounts:', accounts);
}).catch(error => {
    console.error('Error connecting to Ethereum node:', error);
});
