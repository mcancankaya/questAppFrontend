import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Radio } from "@mui/material";
import { PutWithAuth } from "../../services/HttpService";

function Avatar(props) {
    const { avatarId } = props;
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState(avatarId);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        saveAvatar();
        setOpen(false);
    }
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }
    const saveAvatar = () => {
        PutWithAuth("/users/" + localStorage.getItem("currentUser"), {
            avatarId: selectedValue
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }


    return (

        <div>

            <Card sx={{ maxWidth: 345, margin: 5 }}>
                <CardMedia
                    component={"img"}
                    image={`/avatars/avatar${selectedValue}.png`}
                    title="User Avatar"
                    alt="User Avatar"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Username
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        User info
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpen} size="small">Change Avatar</Button>
                </CardActions>
            </Card>
            <Modal
                style={{ display: "flex", maxWidth: 200 }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <List dense sx={{ width: '100%', maxWidth: 150 }}>
                    {[1, 2, 3, 4, 5, 6].map((key) => {
                        const labelId = `checkbox-list-secondary-label-${key}`;
                        return (
                            <ListItem key={key}
                                secondaryAction={
                                    <Radio
                                        edge="end"
                                        value={key}
                                        onChange={handleChange}
                                        checked={"" + selectedValue === "" + key}
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                }

                                disablePadding
                            >
                                <CardMedia
                                    style={{ maxWidth: 100 }}
                                    component={"img"}
                                    title="User Avatar"
                                    alt={`Avatar n°${key}`}
                                    src={`/avatars/avatar${key}.png`}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Modal>
        </div>
    )
}

export default Avatar;