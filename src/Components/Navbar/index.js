// React Components
import { cloneElement, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

// Custom Components
import { Context } from "../Context";
import CardLayout from "../../Layouts/CardLayout";
import ListLayout from "../../Layouts/ListLayout";

// MUI Components
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    useScrollTrigger,
    Divider,
    Button,
    IconButton,
    Avatar,
    Tooltip,
    Menu,
    styled,
    TextField,
    InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";

// MUI Icons Components
import ArchiveIcon from "@mui/icons-material/Archive";
import HomeIcon from "@mui/icons-material/Home";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import SearchIcon from "@mui/icons-material/Search";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";

import logo from "../../assets/Images/logo.png";

const AccountButton = styled(Button)`
    padding: 0px 10px;
    border-color: lightgray;
    color: gray;
    &:hover {
        background-color: offwhite;
        border-color: lightgray;
    }
`;

const Search = styled(Box)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-radius: 10px;
    margin: 5px 0px;
    width: 30%;
`;

const MenuBox = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #e8eae7;
    margin: -8px 0px;
    padding: 2ch 6ch;
`;

function ElevationScroll(props) {
    const { children, window } = props;
    const elevationScrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: elevationScrollTrigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Navbar = (props) => {
    const { user, setUser } = useContext(Context);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElLabel, setAnchorElLabel] = useState(null);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [isCardView, setIsCardView] = useState(true);

    const handleLogout = () => {
        setUser(null);
        window.location.href = "/login";
    };

    const toggleSettings = () => {
        setOpen(!open);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenLabelMenu = (event) => {
        setAnchorElLabel(event.currentTarget);
    };

    const toggleView = () => {
        setIsCardView(!isCardView);
    };

    return (
        <>
            <ElevationScroll {...props}>
                <AppBar
                    position="sticky"
                    sx={{
                        position: "relative",
                        backgroundColor: `rgba(255, 255, 255, 0.8)`,
                        marginBottom: "1.5em",
                    }}
                >
                    <Toolbar
                        variant="dense"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <NavLink to="/" style={{ textDecoration: "none" }}>
                            <img src={logo} alt="logo" height="40em" />
                        </NavLink>
                        <Search
                            sx={{
                                marginLeft: 10,
                                backgroundColor: "primary.light",
                            }}
                        >
                            <TextField
                                variant="standard"
                                placeholder="Search..."
                                sx={{
                                    paddingLeft: 2,
                                    paddingY: 0.75,
                                }}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                    disableUnderline: true,
                                }}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Search>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                right: "1em",
                            }}
                        >
                            <Tooltip title="Home">
                                <NavLink
                                    to="/home"
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}
                                >
                                    <IconButton sx={{ marginRight: 2 }}>
                                        {props.active === "home" ? (
                                            <HomeIcon
                                                sx={{
                                                    cursor: "pointer",
                                                    fontSize: 30,
                                                }}
                                            />
                                        ) : (
                                            <HomeOutlinedIcon
                                                sx={{
                                                    cursor: "pointer",
                                                    fontSize: 30,
                                                }}
                                            />
                                        )}
                                    </IconButton>
                                </NavLink>
                            </Tooltip>
                            <Tooltip title="Archive">
                                <NavLink
                                    to="/archive"
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}
                                >
                                    <IconButton sx={{ marginRight: 2 }}>
                                        {props.active === "archive" ? (
                                            <ArchiveIcon
                                                sx={{
                                                    cursor: "pointer",
                                                    fontSize: 30,
                                                }}
                                            />
                                        ) : (
                                            <ArchiveOutlinedIcon
                                                sx={{
                                                    cursor: "pointer",
                                                    fontSize: 30,
                                                }}
                                            />
                                        )}
                                    </IconButton>
                                </NavLink>
                            </Tooltip>
                            <Tooltip title="Label">
                                <IconButton sx={{ marginRight: 2 }}>
                                    <LabelOutlinedIcon
                                        sx={{
                                            cursor: "pointer",
                                            fontSize: 30,
                                        }}
                                        onClick={handleOpenLabelMenu}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Trash">
                                <NavLink
                                    to="/trash"
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}
                                >
                                    <IconButton sx={{ marginRight: 2 }}>
                                        {props.active === "trash" ? (
                                            <DeleteIcon
                                                sx={{
                                                    cursor: "pointer",
                                                    fontSize: 30,
                                                }}
                                            />
                                        ) : (
                                            <DeleteOutlineIcon
                                                sx={{
                                                    cursor: "pointer",
                                                    fontSize: 30,
                                                }}
                                            />
                                        )}
                                    </IconButton>
                                </NavLink>
                            </Tooltip>
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />
                            <IconButton
                                sx={{ marginX: 2 }}
                                onClick={toggleView}
                            >
                                {isCardView ? (
                                    <Tooltip title="List View">
                                        <ViewListRoundedIcon
                                            sx={{ fontSize: 30 }}
                                        />
                                    </Tooltip>
                                ) : (
                                    <Tooltip title="Card View">
                                        <DashboardRoundedIcon
                                            sx={{ fontSize: 30 }}
                                        />
                                    </Tooltip>
                                )}
                            </IconButton>
                            <Tooltip title="Open Profile">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        src={user.profilePicture}
                                        sx={{ width: 40, height: 40 }}
                                    />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            sx={{
                                mt: "45px",
                                padding: 0,
                            }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuBox>
                                <Avatar
                                    src={user.profilePicture}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        alignContent: "center",
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    color="gray"
                                    align="center"
                                    paddingTop={1}
                                >
                                    {user.email}
                                </Typography>
                                <AccountButton
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 20,
                                        marginY: 3,
                                        paddingX: 3,
                                    }}
                                    onClick={toggleSettings}
                                >
                                    Manage your account
                                </AccountButton>
                                <AccountButton
                                    variant="outlined"
                                    sx={{
                                        marginBottom: 1,
                                        paddingY: 1,
                                        paddingX: 3,
                                    }}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </AccountButton>
                            </MenuBox>
                        </Menu>
                    </Toolbar>
                    <Divider />
                </AppBar>
            </ElevationScroll>
            {isCardView ? (
                <CardLayout notes={props.notes}>{props.children}</CardLayout>
            ) : (
                <ListLayout notes={props.notes}>{props.children}</ListLayout>
            )}
        </>
    );
};
export default Navbar;
