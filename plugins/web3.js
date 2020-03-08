import Web3 from "web3";
import artifacts from "~~/build/contracts/SingleNumRegister.json";

export default async function(context, inject) {
  const web3 = new Web3(new Web3.providers.HttpProvider(process.env.PRIVATE));

  let networkId = await web3.eth.net.getId();

  let contract = new web3.eth.Contract(
    artifacts.abi,
    artifacts.networks[networkId].address
  );

  inject("web3", web3);
  inject("contract", contract);
}
