import React from "react";
import Section from "./section";

class PortfolioItem extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {hasImage: true};
    this.onImageStateChange = this.onImageStateChange.bind(this);
  }

  onImageStateChange(e) {
    this.setState({
      hasImage: false
    });
    setTimeout(() => {
      this.setState({
        hasImage: true
      });
    }, 1000);
  }

  render() {
    let path = `img/portfolio/${this.props.data.pic}.png`;
    return <div onClick={this.onImageStateChange} className="col-sm-4 portfolio-item">
                    <a href={this.props.data.link} className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        {this.state.hasImage ? <img src={path} className="img-responsive" alt="" /> : null}
                    </a>
                </div>
  }
}
export default class Portfolio extends React.Component {
  render() {
    let children = [];
    for(let item of this.props.data) {
      children.push(<PortfolioItem data={item} key={children.length} />);
    }
    return <Section id="portfolio" title="Portfolio" star="star-primary">
      {children}
    </Section>;
  }
}
