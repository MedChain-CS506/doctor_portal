var Web3 = require('web3');
const provider = new Web3.providers.HttpProvider(
  'http://127.0.0.1:7545'
);
//const med_chain = require('json-loader!./src/contracts/med_chain.json');

var med_chain = require ('./src/contracts/med_chain.json');
const web3 = new Web3(provider);
const add = async () => {
  const accounts = await web3.eth.getAccounts();
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = med_chain.networks[networkId];
  const instance = new web3.eth.Contract(
    med_chain.abi,
    deployedNetwork && deployedNetwork.address
  );
  let data = {
    accounts: accounts,
    web3: web3,
    contract: instance
  };
  return data
}
add().then(async (data) => {
  await data.contract.methods.add_doctor(10, 10101010, "Brennan Fife", "Heart", data.accounts[0]).send({
    from: data.accounts[0], gas:3000000
  },
  error => {
    console.log(error);
  });
  await data.contract.methods.add_pharmacy(10, 10101010, data.accounts[1]).send({
    from: data.accounts[0], gas:3000000
  },
  error => {
    console.log(error);
  });
});