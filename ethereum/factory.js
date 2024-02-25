import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xa4c5c923175574aC66dD108D0705a11cf83df311"
);

export default instance;
