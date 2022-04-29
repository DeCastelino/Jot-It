import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";

const HomeLayout = ({ children }) => {
    return (
        <Box sx={{ margin: 0, padding: 0, overflow: "hidden" }}>
            <Navbar>{children}</Navbar>
        </Box>
    );
};

export default HomeLayout;
