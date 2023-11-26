const HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
  // Increase the gas limit if needed (e.g., 8000000)
  const gasLimit = 8000000;
  
  // Deploy the HelloWorld contract with an initial message
  deployer.deploy(HelloWorld, "Hello, World!", { gas: gasLimit });
};
