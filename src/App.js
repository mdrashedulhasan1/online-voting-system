import { Routes, Route } from "react-router-dom";
import CreateAccount from './components/User/CreateAccount/CreateAccount';
import UserLogin from './components/User/UserLogin/UserLogin';
import Vote from './components/User/Vote/Vote';
import AdminLogin from './components/Admin/AdminLogin/AdminLogin';
import AdminControl from './components/Admin/AdminControl/AdminControl';
import AdminHome from './components/Admin/AdminHome/AdminHome';
import AdminAddPoliticalParties from './components/Admin/AdminAddPoliticalParties/AdminAddPoliticalParties';
import AdminResult from './components/Admin/AdminResult/AdminResult';
import Header from './components/User/Header/Header';
function App() {
  return (
    <div className="App">
      <Routes>  
      <Route path="/" element={<Header></Header>} />
        <Route path="/create-account" element={<CreateAccount></CreateAccount>} />
        <Route path="/user-login" element={<UserLogin></UserLogin>} />
        <Route path="/admin-login" element={<AdminLogin></AdminLogin>} />
        <Route path="/user-login/vote" element={<Vote></Vote>} />
        <Route path="/admin-control" element={<AdminControl></AdminControl>} />
        <Route path="/admin-control-home" element={<AdminHome></AdminHome>} />
        <Route path="/admin-control-add-political-parties" element={<AdminAddPoliticalParties></AdminAddPoliticalParties>} />
        <Route path="/admin-control-result" element={<AdminResult></AdminResult>} />
      </Routes>
    </div>
  );
}

export default App;
