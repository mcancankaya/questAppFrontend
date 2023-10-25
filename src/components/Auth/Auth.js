import React, { useState } from "react";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import { FormControl } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from "react-router-dom";


function Auth() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    let navigate = useNavigate();

    
    
    const handleUsername= (value) =>{
        setUsername(value)
    }

    const handlePassword = (value) =>{
        setPassword(value)
    }

    const sendRequest= (path)=>{
        fetch("/auth/"+path, {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                userName: username,
                password:password,
            }),
        })
        .then((res) => res.json())
        .then((result) => {localStorage.setItem("tokenKey",result.message);
            localStorage.setItem("currentUser",result.userId);
            localStorage.setItem("username",username)})
        .catch((err) => console.log(err))
    }


    const handleButton = (path) =>{
        sendRequest(path);
        setUsername("");
        setPassword("");
        navigate(0);
    }

    return(
        <FormControl sx={{alignItems:"center"}}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
        <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={(i) => handleUsername(i.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(i) => handlePassword(i.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=> handleButton("register")}
              >
                Register
              </Button>
                  <Typography variant="body2">
                    {"Are you already registered? "}
                  </Typography>
                  <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=> handleButton("login")}
              >
                Login
              </Button>
            </Box>
        </FormControl>
    )
}

export default Auth;