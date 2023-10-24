import './App.css';
import HeaderNav from './component/Header/HeaderNav.jsx';
import Tabs from './component/Main/Tabs.jsx';
import Membership from './component/Membership/Membership.jsx';
import Footer from './component/Footer/Footer.jsx';
import FooterNav from './component/Footer/FooterNav.jsx';

function App() {
  return (
    <div className="wrapper">
      <HeaderNav />
      <Tabs />
      <Membership />
      <Footer />
      <FooterNav />
    </div>
  );
}

export default App;
