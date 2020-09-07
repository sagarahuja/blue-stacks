import { connect } from "react-redux";
import CustomTabView from "./DashboardView";
import { actions } from "store/actionCreators/actionCreators";
import { State } from "store/State";
import moment from "moment";

const { updateCampaignTab, updateCampaignSchedule } = actions;

const mapStateToProps = ({ campaign }: State) => {
  const { selectedTab, campaigns } = campaign;
  let filteredCampaignBySelectedTab = campaigns;
  if (selectedTab === 0) {
    filteredCampaignBySelectedTab = campaigns.filter(campaign => moment(campaign.campaign_date, "x").isAfter(moment(), "day"));
  } else if (selectedTab === 1) {
    filteredCampaignBySelectedTab = campaigns.filter(campaign => moment(campaign.campaign_date, "x").isSame(moment(), "day"));
  } else {
    filteredCampaignBySelectedTab = campaigns.filter(campaign => moment(campaign.campaign_date, "x").isBefore(moment(), "day"));
  }
  return {
    selectedTab,
    campaigns: filteredCampaignBySelectedTab
  };
};

export default connect(
  mapStateToProps,
  { updateCampaignTab, updateCampaignSchedule }
)(CustomTabView);
