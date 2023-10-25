import { CardContent, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar/Avatar";
function Comment(props) {
    const { text, userId, userName} = props;
    return(
        <CardContent style={{display:"flex", flexWrap:"wrap", justifyContent: "flex-start", alignItems:"center"}}>
            <OutlinedInput 
                disabled
                id="outlined-adornment-amount"
                multiline
                inputProps={{maxLength: 25}}
                fullWidth
                value={text}
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
            >
            </OutlinedInput>
        </CardContent>
    )
}
export default Comment;