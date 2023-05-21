import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

// import Tweets from "./pages/Tweets";
// import SharedLayout from "./components/Layout/Layout";
// import Home from "./pages/Home";

const HomePage = lazy(() => import("./pages/HomePage"));
const Tweets = lazy(() => import("./pages/Tweets"));
const SharedLayout = lazy(() => import("./components/Layout/Layout"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
