import Avatar from "../Avatar/Avatar";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import UserActivity from "../UserActivity/UserActivity";
import { makeStyles } from "@mui/styles";
import { GetWithAuth } from "../../services/HttpService";

const useStyles = makeStyles({
    root: {
        display: "flex",
    },
});

function User() {

    const classes = useStyles();
    const { userId } = useParams();
    const [user, setUser] = useState();

    const getUser =() =>{
        GetWithAuth("/users/"+userId)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                setUser(result);
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(()=>{
        getUser()
    },[])



    return (
        <div className={classes.root}>
            {user?<Avatar avatarId={user.avatarId} />:""}
            <UserActivity userId={userId} />
        </div>
    )

}

export default User;