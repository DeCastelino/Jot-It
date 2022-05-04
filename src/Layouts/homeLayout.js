import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

import Notes from "../data.json";

const HomeLayout = ({ children, active }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // console.log(Notes["notes"]);
        setNotes(Notes["notes"]);
    }, []);

    return (
        <Box sx={{ margin: 0, padding: 0, overflow: "hidden" }}>
            <Navbar active={active} notes={notes}>
                {children}
            </Navbar>
        </Box>
    );
};

export default HomeLayout;
