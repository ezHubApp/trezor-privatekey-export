const ethers = require("ethers");
require('dotenv').config();
async function run() {
  const node = ethers.utils.HDNode.fromMnemonic(process.env.SEED, process.env.PASSPHRASE);
  const data = []
  for (let i = 0; i < process.env.MAX_EXPORT; i++) {
    const { address, privateKey } = node.derivePath(`m/44'/60'/0'/0/${i}`);
    data.push({ address, privateKey })
  }
  console.info(data)
}

run();