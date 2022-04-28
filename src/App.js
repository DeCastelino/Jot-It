import { useContext } from "react/lib/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./Components/ColorSchema";
import { Context } from "./Components/Context";

import Home from "./Components/Home";
import Login from "./Components/Login";

const App = () => {
    const { user } = useContext(Context);

    return (
        <div className="App">
            <Router>
                <Routes>
                    {!user ? (
                        <Route path="/" element={<Login />} />
                    ) : (
                        <Route exact path="/" element={<Home />} />
                    )}
                </Routes>
            </Router>
        </div>
    );
};

export default App;
