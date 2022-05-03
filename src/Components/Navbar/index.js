import { useState } from "react";

import CardLayout from "../../Layouts/CardLayout";
import ListLayout from "../../Layouts/ListLayout";

import {
    IconButton,
    styled,
    List,
    AppBar,
    Box,
    Toolbar,
    Menu,
    Avatar,
    Tooltip,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
    InputAdornment,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import LabelIcon from "@mui/icons-material/Label";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";

// Import Logo
import Logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";

const DRAWER_WIDTH = 200;

const openedMixin = (theme) => ({
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const Search = styled(Box)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-radius: 10px;
    margin: 0px 20px;
    width: 50%;
    background-color: white;
`;

const Navbar = ({ children, active }) => {
    const [openSideNav, setOpenSideNav] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [search, setSearch] = useState("");
    const [isCardView, setIsCardView] = useState(true);

    const toggleSidenav = () => {
        setOpenSideNav((prev) => !prev);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toggleView = () => {
        setIsCardView((prev) => !prev);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                sx={{
                    paddingX: 0.5,
                    background: "white",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    boxShadow: 1,
                }}
            >
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        onClick={toggleSidenav}
                        sx={{ marginRight: "1%" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            gap: 5,
                        }}
                    >
                        <img src={Logo} alt="logo" width="120" />
                        <Search sx={{ backgroundColor: "primary.light" }}>
                            <TextField
                                variant="standard"
                                placeholder="Search..."
                                sx={{
                                    paddingLeft: 2,
                                    paddingY: 1,
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
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton
                            sx={{ marginRight: 2 }}
                            onClick={toggleView}
                        >
                            {isCardView ? (
                                <Tooltip title="List View">
                                    <ViewListRoundedIcon />
                                </Tooltip>
                            ) : (
                                <Tooltip title="Card View">
                                    <DashboardRoundedIcon />
                                </Tooltip>
                            )}
                        </IconButton>
                        <Tooltip title="Open Profile">
                            <IconButton onClick={handleOpenUserMenu}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
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
                        ></Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={openSideNav}>
                <DrawerHeader />
                <List>
                    <Link to="/home" style={{ textDecoration: "none" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {active == "home" ? (
                                    <HomeIcon sx={{ fontSize: 30 }} />
                                ) : (
                                    <HomeOutlinedIcon sx={{ fontSize: 30 }} />
                                )}
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        color: "primary.main",
                                        fontWeight:
                                            active == "home" ? 700 : 500,
                                    }}
                                >
                                    Home
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                    <Link to="/labels" style={{ textDecoration: "none" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {active == "labels" ? (
                                    <LabelIcon sx={{ fontSize: 30 }} />
                                ) : (
                                    <LabelOutlinedIcon sx={{ fontSize: 30 }} />
                                )}
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        color: "primary.main",
                                        fontWeight:
                                            active == "labels" ? 700 : 500,
                                    }}
                                >
                                    Labels
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                    <Link to="/archive" style={{ textDecoration: "none" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {active == "archive" ? (
                                    <ArchiveIcon sx={{ fontSize: 30 }} />
                                ) : (
                                    <ArchiveOutlinedIcon
                                        sx={{ fontSize: 30 }}
                                    />
                                )}
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        color: "primary.main",
                                        fontWeight:
                                            active == "archive" ? 700 : 500,
                                    }}
                                >
                                    Archive
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                    <Link to="/trash" style={{ textDecoration: "none" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {active == "trash" ? (
                                    <DeleteIcon sx={{ fontSize: 30 }} />
                                ) : (
                                    <DeleteOutlinedIcon sx={{ fontSize: 30 }} />
                                )}
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        color: "primary.main",
                                        fontWeight:
                                            active == "trash" ? 700 : 500,
                                    }}
                                >
                                    Trash
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {isCardView ? (
                    <CardLayout>{children}</CardLayout>
                ) : (
                    <ListLayout>{children}</ListLayout>
                )}
            </Box>
        </Box>
    );
};
export default Navbar;
