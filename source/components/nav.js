import React from "react";

class LinkElem extends React.Component {
  static get defaultProps() {
    return {
      className: "page-scroll"
    };
  }  
  render() {
    return <li className={this.props.className}>
             <a onClick={this.props.onClick} 
                href={this.props.link}>
                {this.props.name}
             </a>
           </li>;
  }
}

export default class Nav extends React.Component {  
  render() {
    let linksText = this.props.data;
    linksText.forEach ((elem, index, linksText) => {
      linksText[index] = <LinkElem onClick={this.props.onClick} key={index} {...elem} />;
    });
    return <nav className="navbar navbar-default navbar-fixed-top">
             <div className="container">
               <div className="navbar-header page-scroll">
                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                   <span className="sr-only">Toggle navigation</span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                 </button>
                 <a className="navbar-brand" href="#header">{this.props.ntitle}</a>
               </div>
               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                 <ul className="nav navbar-nav navbar-right">
                   <li className="hidden"><a href="#page-top"></a></li>
                   {linksText}
                </ul>
            </div>
        </div>
    </nav>;
  }
}