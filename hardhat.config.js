require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balances", "Prints the list of  account balances", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    balance = await ethers.provider.getBalance(account.address);
    console.log(account.address, "has balance", balance.toString());
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      chainId: 11155111,
      accounts: [process.env.ACCOUNT_ONE],
    },
    mumbai: {
      url: process.env.MUMBAI_RPC_URL,
      chainId: 80001,
      accounts: [
        process.env.ACCOUNT_ONE,
        process.env.ACCOUNT_TWO,
        process.env.ACCOUNT_THREE,
      ],
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      chainId: 5,
      accounts: [
        process.env.ACCOUNT_ONE,
        process.env.ACCOUNT_TWO,
        process.env.ACCOUNT_THREE,
      ],
    },
  },
};
