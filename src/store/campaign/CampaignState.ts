import { Campaign } from "../../types/Campaign";

export interface CampaignState {
  campaigns: Campaign[];
  selectedTab: number;
}
