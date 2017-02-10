import React from "react";

export default class Header extends React.Component {
  render() {
    let {title, subtitle} = this.props.data;
    return <header>
             <div className="container">
               <div className="row">
                <div className="col-lg-12">
                  <img className="img-responsive" src="img/profile.png" alt="" />
                  <div className="intro-text">
                    <span className="name">{title}</span>
                    <div id="app"></div>                        
                    <hr className="star-light" />
                    <span className="skills">{subtitle}</span>
                  </div>
                </div>
            </div>
        </div>
    </header>;
  }
}