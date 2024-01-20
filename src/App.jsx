import { Navbar, Home, Search } from "./components";
import NewsState from "./context/news/NewsState";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <NewsState>
            <Navbar />
            <div className="container my-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search/:query" element={<Search />} />
                </Routes>
            </div>
        </NewsState>
    );
};

export default App;
