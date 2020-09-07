import { CampaignState } from "./CampaignState";
import { ACTION_TYPES } from "store/actionCreators/actionTypes";
import Action from "../actionCreators/Action";
import campaignData from "data/campaign";
import moment from "moment";

const initState: Readonly<CampaignState> = {
  campaigns: campaignData.campaigns,
  selectedTab: 0
};
export default (state: CampaignState = initState, action: Action): CampaignState => {
  if (action.type === ACTION_TYPES.UPDATE_CAMPAIGN_TAB && typeof action.payload === "number") {
    return { ...state, selectedTab: action.payload };
  }
  if (action.type === ACTION_TYPES.UPDATE_CAMPAIGN_SCHEDULE && typeof action.payload !== "number") {
    const { campaigns } = state;
    const { campaignId, date } = action.payload;
    const updatedCampaigns = campaigns.map(campaign => {
      if (campaign.campaign_id === campaignId) {
        return { ...campaign, campaign_date: moment(date).format("x") };
      }
      return campaign;
    });
    return { ...state, campaigns: updatedCampaigns };
  }
  return state;
};
