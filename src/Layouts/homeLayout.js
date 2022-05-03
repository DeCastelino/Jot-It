import { Box } from "@mui/material";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

const HomeLayout = ({ children, active }) => {
    useEffect(() => {}, []);

    return (
        <Box sx={{ margin: 0, padding: 0, overflow: "hidden" }}>
            <Navbar active={active}>{children}</Navbar>
        </Box>
    );
};

export default HomeLayout;
