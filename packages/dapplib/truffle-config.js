require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million pupil hover beauty fortune stadium'; 
let testAccounts = [
"0x8588cdd45845c296fcab804f272d7981c1a30f46b04e53852c2092f2386928aa",
"0xa192b489cf61d4223619490f1e4c2d34d44ba0307a62c45c67a44308518fea0c",
"0x0b51cfc42f9d1b80427446de8a0e2be22c54ff44e679199aeec488eea2101160",
"0x6ddd140376af7d4cec680f6b20c73059f2ab949ec95f1080ca8df2a7f0763d74",
"0x3b661d0321cfdfdbd7103bc632108e386094e7482f2f51cff0dd249413fd9bdb",
"0xd237bd9c7596376662cd0bece9be063460c70a2d1e86ee75b663e708ada8a63f",
"0xb68d780ddd5299efb694f99a10d6b0c0c0d341a23a39d57a07b2411421d91a88",
"0x94f5525784c7182f2ba7958c5462b35cbbb33599ec2c406d7615f052169c6338",
"0x9314b2244637f35c051164972152b8bfee28a3b8d5d2630d9bb08d04122ad451",
"0xf2c44ed37f76fd830d227938f68679c68a81956691304fca1fe7111e8e8e240e"
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
            version: '^0.5.11'
        }
    }
};
