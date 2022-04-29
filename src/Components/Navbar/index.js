import { useState } from "react";

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
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";

// Import Logo
import Logo from "../../assets/Images/logo.png";

const DRAWER_WIDTH = 240;

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

const Navbar = ({ children }) => {
    const [openSideNav, setOpenSideNav] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const toggleSidenav = (event) => {
        setOpenSideNav((prev) => !prev);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setOpenSideNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                sx={{
                    paddingX: 2,
                    background: "white",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    boxShadow: 1,
                }}
            >
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        onClick={toggleSidenav}
                        sx={{ marginRight: 5 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <img src={Logo} alt="logo" width="140" />
                        <Search>
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
                    {["Inbox", "Starred", "Send email", "Drafts"].map(
                        (text, index) => (
                            <ListItemButton
                                key={text}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: openSideNav
                                        ? "initial"
                                        : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: openSideNav ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ opacity: openSideNav ? 1 : 0 }}
                                />
                            </ListItemButton>
                        )
                    )}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
};
export default Navbar;
