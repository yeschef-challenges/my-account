import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Clear";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SignUpForm from "../SignUpForm";
import "./style.scss";

const useStyles = makeStyles({
    container: {
        backgroundColor: "#1e1e1e",
        color: "white",
        maxWidth: "375pt",
        width: "100%",
        margin: "75px auto",
        height: "812pt",
        padding: "0",
        fontSize: '14pt'
    },
    closeIcon: {
        width: "20pt",
        height: "20.67pt",
        cursor: "pointer"
    },
    tab: {
        fontSize: '14pt',
        fontWeight: '600',
        fontFamily: 'Open Sans'
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="md">
            <div className="signup-form__heading">
                <p>MY ACCOUNT</p>
                <CloseIcon className={classes.closeIcon} />
            </div>
            <Tabs
                value={0}
                centered
                variant="fullWidth"
            >
                <Tab className={classes.tab} label="SIGN UP" />
                <Tab className={classes.tab} label="SIGN IN" disabled />
            </Tabs>
            <SignUpForm />
        </Container>
    )
}

export default Header;