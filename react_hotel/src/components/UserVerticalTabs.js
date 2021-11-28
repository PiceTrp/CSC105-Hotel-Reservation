import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

import UserTable from "../components/UserTable";
import UserInfo from "../components/UserInfo";
import UserSetting from "../components/UserSetting";

import UserPic from "../pictures/EveryComponents/All_Icons/user.png";
import ProfileIcon from "../pictures/EveryComponents/All_Icons/profile-user.png";
import { DataContext } from "../context/DataContext";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: "300px",
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        alignItems: "center",
    },
    tab: {
        //borderLeft: "1px solid #614545",
        //borderRight: "1px solid #614545",
        //borderBottom: "1px solid #614545",
        backgroundColor: "#fafafa",
    },
}));

const VerticalTabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { data, setData } = useContext(DataContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div class="box-left">
                <div>
                    <div>
                        <Avatar
                            alt="Remy Sharp"
                            src={UserPic}
                            className={classes.large}
                        />
                        <p>
                            {data.nametitle} {data.firstname} {data.lastname}
                        </p>
                        <p>Status : Member</p>
                    </div>

                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab
                            label="Personal Info"
                            {...a11yProps(0)}
                            className={classes.tab}
                        />
                        <Tab
                            label="Booking History"
                            {...a11yProps(1)}
                            className={classes.tab}
                        />
                        <Tab
                            label="Setting"
                            {...a11yProps(2)}
                            className={classes.tab}
                        />
                    </Tabs>
                </div>
            </div>
            <div class="box-right">
                <TabPanel value={value} index={0}>
                    <UserInfo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <UserTable />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <UserSetting />
                </TabPanel>
            </div>
        </div>
    );
};

export default VerticalTabs;
