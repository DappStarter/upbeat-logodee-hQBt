require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift renew rural unknown good clinic equal genius'; 
let testAccounts = [
"0x3c5a2c92a5e1555b23e20c54a133746742802dbd901456172c5614dc21b889e0",
"0x201ff1df64f69653ae8721918ad6ee52c8256e7c9bfaf31b106bcc9808338ca7",
"0x854492490f678c1c3c77b286d89b3a8ab6d34333cbf66a18d40b1ea6897c11e8",
"0xee282905abe592494b61a893085a0e0c8772001766ad4a404c440f4e1987e342",
"0x1ea263d2f979b299cc8f1da780da9a72fead9e530ff5190d32f4f6488a58b108",
"0x43596926db83b99d90de46e1056395fa883953f9e9699b92260f17f6562bf886",
"0xab0495d07df8b7c0d5673431389cff3b135ce67f4c0ff8051a20759a057627a0",
"0x05d7ea6d62bcd14b33750d2da30f083c1de62ae24bffec8f8bb33a1e619e4f32",
"0x815e5a686e4df43ac7c0f078aa8dc985b7255c28269f4b8177b4eff26e52916a",
"0xec51803f295bdf2a5811de7a9df0c3f39b4ee7c6ef024d5736ca60ad5c0b79a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

