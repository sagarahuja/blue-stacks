import { ACTION_TYPES } from "./actionTypes";
import createAction from "./utils/createAction";
export const actions = {
  updateCampaignTab: (index: number) => {
    return createAction(ACTION_TYPES.UPDATE_CAMPAIGN_TAB, index);
  },
  updateCampaignSchedule: (campaignId: string, date: string) => {
    return createAction(ACTION_TYPES.UPDATE_CAMPAIGN_SCHEDULE, { campaignId, date });
  }
};
