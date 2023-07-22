const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const lock = await hre.ethers.deployContract("Counter");
  console.log("Counter deployed to:", lock.target);

  await lock.waitForDeployment();

  const lock2 = await hre.ethers.deployContract("Retrieve");

  await lock2.waitForDeployment();

  console.log("Retrieve deployed to:", lock2.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
