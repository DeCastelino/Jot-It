import { useContext } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
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
                        <Route
                            path="/"
                            element={<Navigate to="/login" replace />}
                        />
                    ) : (
                        <>
                            <Route
                                exact
                                path="/"
                                element={<Navigate to="/home" replace />}
                            />
                            <Route path="/home" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                        </>
                    )}
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
