import { Route, Routes } from "react-router-dom";
import "./App.css";

import Calendrier from "./components/Calendrier";
import AppNavBar from "./components/Navbar";
import { useState } from "react";
import ArticleComponent from "./components/ArticleComponent";
import CreateArticle from "./components/CreateArticle";
import Xls from "./components/xls";
import Mq2706 from "./components/mq2706";
import SignIn from "./components/Login";
import PrivateRoute from "./components/private/PrivateRoute";
import Profile from "./components/Profile";
//import Mq2706 from "./components/mq2706";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      
      <AppNavBar></AppNavBar>

      <Routes>
        <Route path="/" element={<SignIn></SignIn>}/>
        <Route path="/Profile" element={<PrivateRoute><Profile></Profile></PrivateRoute>}/>
        <Route path="/Profile/calendrier" element={<PrivateRoute><Calendrier></Calendrier></PrivateRoute>} />
        <Route
          path="/Profile/Article"
          element={
            <PrivateRoute>
            <ArticleComponent
              search={search}
              setSearch={setSearch}
            ></ArticleComponent>
            </PrivateRoute>
          }
        />
        <Route
          path="/Profile/ajouterArticle"
          element={<PrivateRoute><CreateArticle></CreateArticle></PrivateRoute>}
        />
        <Route path="/Profile/xls" element={<PrivateRoute><Xls></Xls></PrivateRoute>} />
        <Route path="/Profile/mq2706" element={<PrivateRoute><Mq2706></Mq2706></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
