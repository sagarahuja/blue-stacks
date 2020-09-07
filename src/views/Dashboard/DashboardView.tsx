import * as React from "react";
import TabView from "components/TabView";
import TabPanel from "components/TabPanel";
import { tabs } from "data/tabs";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Campaign } from "types/Campaign";
import * as csvIcon from "images/file.png";
import * as statisticsIcon from "images/statistics-report.png";
import moment from "moment";
import * as classNames from "classnames/bind";
const cx = classNames.bind(require("./Dashboard.module.css"));
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const images = importAll(require.context("../../images/campaign", false, /\.(png)$/));

const DashboardView = ({ selectedTab, updateCampaignTab, campaigns, updateCampaignSchedule }: Props) => {
  const classes = useStyles();

  return (
    <>
      <TabView tabs={tabs} selectedTab={selectedTab} onTabSelect={updateCampaignTab} />{" "}
      {tabs.map((tab, index) => (
        <TabPanel value={selectedTab} index={index}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>DATE</TableCell>
                  <TableCell align="left">CAMPAIGN</TableCell>
                  <TableCell align="left">PRICE</TableCell>
                  <TableCell align="left">ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {campaigns.map(campaign => (
                  <TableRow key={campaign.campaign_id}>
                    <TableCell component="th" scope="row">
                      {moment(campaign.campaign_date, "x").format("LL") //parse string
                      }
                    </TableCell>
                    <TableCell align="left">
                      <img src={images[+campaign.campaign_id]} alt={campaign.campaign_name} />
                      {campaign.campaign_name}
                    </TableCell>
                    <TableCell align="left">{campaign.campaign_price}</TableCell>
                    <TableCell align="left">
                      {
                        <div className={cx("action")}>
                          <span>
                            <img src={csvIcon} alt={"csv"} />
                            CSV
                          </span>
                          <span>
                            <img src={statisticsIcon} alt={"statisticsIcon"} />
                            Report
                          </span>
                          <span>
                            <TextField
                              id="date"
                              label="Schedule again"
                              type="date"
                              defaultValue={moment(campaign.campaign_date, "x").format("YYYY-MM-DD")}
                              InputLabelProps={{
                                shrink: true
                              }}
                              onBlur={(event: any) => {
                                event.preventDefault();
                                event.stopPropagation();
                                updateCampaignSchedule(campaign.campaign_id, event.target.value);
                              }}
                            />
                          </span>
                        </div>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      ))}
    </>
  );
};
export interface Props {
  selectedTab: number;
  updateCampaignTab: (selectedTab: number) => void;
  campaigns: Campaign[];
  updateCampaignSchedule: (campaignId: string, date: string) => void;
}

export default DashboardView;

// UTILS
function importAll(r: any) {
  return r.keys().map(r);
}
