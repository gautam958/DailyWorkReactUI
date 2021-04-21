import ClientProfile from "./components/ClientProfile";
import Dashboard from "./components/Dashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import UserForm from "./components/Users/UserForm";
//import Users from "./components/Users";
window.addEventListener('wheel', e => {
  e.preventDefault();
}, { passive: false });
function App() {
  return (



    <div className="wrapper">
      <Header />
      <Menu />
      {/* <Users /> */}
      {/* <ClientProfile /> */}
      <UserForm />
      <Footer />
    </div>
  );
}

export default App;
