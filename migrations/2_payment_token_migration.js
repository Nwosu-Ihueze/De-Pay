const Web3Token = artifacts.require("Web3Token");

module.exports = function (deployer) {
  deployer.deploy(Web3Token);
};