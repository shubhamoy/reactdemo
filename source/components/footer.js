import React from "react";

class Element extends React.Component {
  render() {
    return <div className="footer-col col-md-4">
             <h3>{this.props.title}</h3>
             {this.props.children}
           </div>;
  }
}

class FooterText extends React.Component {
  static get defaultProps() {
    return {
      title: "I'm a funny title",
      content: "Shubhamoy you rocked once again :)"
    };
  }
  
  static get propTypes() {
    return {
      title: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.text        
      ]),
      content: React.PropTypes.string
    };
  }
  render() {
    return <Element title={this.props.title}>
             <p>{this.props.content}</p>
           </Element>;
  }
}

class LinkElem extends React.Component {
  render() {
    return <li>
             <a target="_blank" href={this.props.data.link} className="btn-social btn-outline">
               <i className={`fa fa-fw fa-${this.props.data.social}`}></i>
             </a>
           </li>;
  }
}

class FooterLinks extends React.Component {  
  render() {
    let socials = [];
    for(let item of this.props.content) {
      socials.push(<LinkElem data={item} key={socials.length} />);
    }
    return <Element title={this.props.title}>
             <ul className="list-inline">
             {socials}
             </ul>
           </Element>;
  }
}


export default class Footer extends React.Component {
  render() {
    let f1 = this.props.data.model[0];
    let f2 = this.props.data.model[1];
    let f3 = this.props.data.model[2];
    let dt = new Date().getFullYear();

    return <footer className="text-center">
        <div className="footer-above">
            <div className="container">
                <div className="row">
                    <FooterText {...f1} />
                    <FooterLinks title={f2.title} content={f2.content} />
                    <FooterText {...f3} />
                </div>
            </div>
        </div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        Copyright &copy; {this.props.owner} {dt}
                    </div>
                </div>
            </div>
        </div>
    </footer>;
  }
}