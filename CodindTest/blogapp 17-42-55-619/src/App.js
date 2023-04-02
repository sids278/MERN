import Home from "./pages/home/home";
import TopBar from "./components/topBar/TopBar"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import UpdateForm from './components/UpdateForm'
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
        <Routes>
        <Route exact path="/" element={<Home />}/>
          
        
        <Route path="/register" element={user ? <Home /> : <Register/> }/>
        <Route path="/login" element={user ? <Home /> : <Login />}/>
        <Route path="/write" element={ <Write/>}/>
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:postId" element={ <UpdateForm />}/>
         
        
        </Routes>
    </Router>
  );
}

export default App;