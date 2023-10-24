import React from 'react';
import ReactDOM from 'react-dom';
import './Aside.css';
import AsideLogo from './AsideLogo';

// import AsideButton from './AsideButton';
// import AsideMenu from './AsideMenu';
// import AsideSNS from './AsideSNS';

// const Aside = () => {
//   return (
//     <div>
//       <AsideLogo/>
//       {/* <AsideButton/> */}
//       {/* <AsideMenu/> */}
//       {/* <AsideSNS/> */}
//     </div>
//   );
// };

class Aside extends React.Component{
  constructor(props){
    super(props);
    this.state={
      sideBar: false
    }
    this.handleSidebar = this.handleSidebar.bind(this);
  }

  handleSidebar(){
    this.setState({
      sideBar : !this.state.sideBar
    });
  }

  render(){
    return(
      <div>
        <header className="header">
          <div className="navContainer">
            <div className='logo'></div>
            <div className='btn'></div>
            <nav>
            <hr/>
              <ul
                className="mainNav"
                style={this.state.sideBar ? { transform: "translateX(0)" } : null}
                >Brand
                <li>
                  <a className="mainNavLink" href="#">
                    하겐다즈 소개
                  </a>
                </li>
                <li>
                  <a className="mainNavLink" href="#">
                    하겐다즈 브랜드 스토리
                  </a>
                </li>
                <li>
                  <a className="mainNavLink" href="#">
                    하겐다즈 가치
                  </a>
                </li>
                <li>
                  <a className="mainNavLink" href="#">
                    하겐다즈의 품질 좋은 원료
                  </a>
                </li>
              </ul>
            </nav>
            <button
              onClick = {this.handleSidebar}
              className={`navToggle ${this.state.sideBar ? "open" : null}`}>
              <span />
              <span />
              <span />
            </button>
            <div
              onClick={this.handleSidebar.bind(this)}
              className={`overlay ${this.state.sideBar ? "open" : ""}`}
              />
          </div>
        </header>
        <div className ="wrapper"></div>
      </div>
    );
  }
}

ReactDOM.render(<Aside/>, document.getElementById('root'));

export default Aside;