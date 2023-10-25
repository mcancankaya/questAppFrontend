import { CardContent, InputAdornment, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar/Avatar";
import Button from "@mui/material/Button/Button";

function CommentForm(props) {
    const {userId, userName, postId} = props;
    const[text, setText] = useState("");
    
    const handleChange =(value) =>{
        setText(value)
    };

    const handleSubmit = () =>{
        saveComment();
        setText("");
    };

    const saveComment = () =>{
        fetch("/comments",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                postId:postId,
                userId:userId,
                text:text
            }),
        })
        .then((res)=> res.json())
        .catch((err) => console.log())
    };


    return(
        <CardContent style={{display:"flex", flexWrap:"wrap", justifyContent: "flex-start", alignItems:"center"}}>
            <OutlinedInput 
                id="outlined-adornment-amount"
                multiline
                inputProps={{maxLength: 250}}
                fullWidth
                value={text}
                onChange={(i) => handleChange(i.target.value)}
                startAdornment = {
                    <InputAdornment position="start">
                         <Link style={{textDecoration: "none" , boxShadow : "none", color:"white"}} 
                            to={{pathname : '/users/'+ userId}}>
                            <Avatar
                                sx={{ bgcolor:'gray', color:'white' }} 
                                aria-label="recipe">
                            {userName.charAt(0).toUpperCase()}
                            </Avatar>
                        </Link>
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <Button 
                variant="contained"  
                style={{background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', color:'white'}}
                onClick={handleSubmit}
                >Send Comment</Button>
                    </InputAdornment>
                }
            >
            </OutlinedInput>
        </CardContent>
    )
}
export default CommentForm;