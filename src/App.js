import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./Components/Context";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./Components/ColorSchema";

import Home from "./Components/Home";
import Login from "./Components/Login";

const App = () => {
    const { user } = useContext(Context);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    {!user ? (
                        <Route path="/" element={<Login />} />
                    ) : (
                        <>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/" element={<Home />} />
                        </>
                    )}
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
