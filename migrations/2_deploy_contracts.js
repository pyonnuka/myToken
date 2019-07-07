const MyErc20Token = artifacts.require("MyErc20Token");

module.exports = function(deployer) {
  deployer.deploy(MyErc20Token);
};
