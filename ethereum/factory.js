import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xEee31782e4aCAe1457eF1852E1f36a46eAFa6Fb0"
);

export default instance;
