import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import Header from "./header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    
    this.map = new Map();
    this.map.set('footer', Footer);
    
    this.state = {section : location.hash};

    window.onhashchange = (e) => {
      if(this.map.has(location.hash)) {
        this.setState({section: location.hash});
      }
    }
  }
    
  onClick(e) {
/*
    //e.preventDefault();
    console.log("  hello  ");
*/
  }

  render() {
    let children = [],
        navModel = [];
    for(let key in this.props.data) {
      let View = this.props.data[key].view,
          {label, model} = this.props.data[key];
      
      if(!View && this.map.has(key)) {
        View = this.map.get(key);
      }
      
      if(View) {
        if(label) {
          this.map.set("#"+key, View);
          this.map.set(View, model);
          navModel.push({link:"#"+key, name:label});
        }
      }
      
      if(this.map.has(this.state.section)) {
        const Tag = this.map.get(this.state.section);
        children = [<Tag key={this.state.section} data={this.map.get(Tag)} />];
      } else {
        children = [<Header key={key} data={this.props.data.header.model} />];
      }
    }
    console.log();
    return <div>
            <Nav onClick={this.onClick} data={navModel} ntitle={this.props.ntitle} />    
            {children}
            <Footer data={this.props.data.footer} owner={this.props.owner} />            
          </div>;
  }
}

//, document.getElementById('page-top'));
/*
            <Header title={this.props.title} />
            <Nav onClick={this.onClick} data={this.props.data.nav} title={this.props.title} />
            <Portfolio data={this.props.data.portfolio} />
            <About />
            <Contact />
*/
        /* children.push(<View key={key} data={model} />); */