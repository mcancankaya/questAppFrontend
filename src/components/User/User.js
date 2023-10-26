import Avatar from "../Avatar/Avatar";
import React from "react";
import { useParams } from "react-router-dom";
import UserActivity from "../UserActivity/UserActivity";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
    },
});

function User() {

    const classes = useStyles();
    const { userId } = useParams();

    return (
        <div className={classes.root}>
            <Avatar avatarId={0} />
            <UserActivity userId={userId} />
        </div>
    )

}

export default User;