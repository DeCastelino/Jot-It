import { useState } from "react";

import {
    Card as MuiCard,
    CardContent,
    CardHeader,
    CardActions,
    IconButton,
    styled,
    Tooltip,
} from "@mui/material";

import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LabelIcon from "@mui/icons-material/Label";

const HomeCard = ({ id, note }) => {
    const [pinned, setPinned] = useState(note.pinned);
    const [activeCard, setActiveCard] = useState("transparent");
    const [openLabelMenu, setOpenLabelMenu] = useState(false);

    const Card = styled(MuiCard)`
        // &:hover,
        // &:focus {
        //     box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
        // }
        max-width: 250px;
        border-radius: 10px;
    `;

    const togglePinned = () => {
        setPinned((prev) => !prev);
    };

    const showIcons = (event) => {
        setActiveCard("primary");
    };
    const hideIcons = (event) => {
        setActiveCard("transparent");
    };

    const handleDeleteNote = () => {};
    const handleArchiveNote = () => {};
    const handleOpenLabelMenu = () => {};

    return (
        <Card
            className="card"
            variant="outlined"
            onMouseOver={showIcons}
            onMouseOut={hideIcons}
        >
            <CardHeader
                action={
                    <IconButton onClick={togglePinned}>
                        {pinned ? (
                            <PushPinIcon color="primary" />
                        ) : (
                            <PushPinOutlinedIcon sx={{ color: activeCard }} />
                        )}
                    </IconButton>
                }
                title={note.title}
            ></CardHeader>
            <CardContent>{note.content}</CardContent>
            <CardActions>
                <Tooltip title="delete">
                    <IconButton onClick={handleDeleteNote}>
                        <DeleteIcon sx={{ fontSize: 20, color: activeCard }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="archive">
                    <IconButton onClick={handleArchiveNote}>
                        <ArchiveIcon sx={{ fontSize: 20, color: activeCard }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="background color">
                    <IconButton>
                        <ColorLensIcon
                            sx={{ fontSize: 20, color: activeCard }}
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="label">
                    <IconButton onClick={handleOpenLabelMenu}>
                        <LabelIcon sx={{ fontSize: 20, color: activeCard }} />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

export default HomeCard;
