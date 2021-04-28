import ClientProfile from "./Components/Masters/ClientProfile";
import Dashboard from "./Components/Masters/Dashboard";
import Footer from "./Components/layout/Footer";
import Header from "./Components/layout/Header";
import Menu from "./Components/layout/Menu";
import UserForm from "./Components/Masters/Users/UserForm";
import UserHome from "./Components/Masters/Users/UserHome";
//import Users from "./components/Users";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function App() {
  return (



    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Menu />
        {/* <Users /> */}
        {/* <ClientProfile /> */}
        {/* <UserForm /> */}
        {/* <UserHome /> */}

        <Switch>
          <Route exact path="/">
            <UserHome />
          </Route>
          <Route exact path="/Users">
            <UserHome />
          </Route>
          <Route exact path="/Users/AddUser">
            <UserForm />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
