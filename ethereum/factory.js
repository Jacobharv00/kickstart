import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xFfc08628377F955a4b683e52B366654Eeec33C8C"
);

export default instance;
