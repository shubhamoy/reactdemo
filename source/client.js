import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Header from "./components/header";
import Nav from "./components/nav";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";


console.clear();

$(function(){
  var navMain = $("#bs-example-navbar-collapse-1");
  navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });
});

let navTitle = "Shubhamoy's Den";
let siteOwner = "Shubhamoy";

let headerModel = {
  title: "Experiments with ReactJS",
  subtitle: "React - Components - JSX - ES6"
};

let portfolioModel = [
    {pic:"cabin", link:"#portfolioModal1"},
    {pic:"cake", link:"#portfolioModal2"},
    {pic:"circus", link:"#portfolioModal3"},
    {pic:"game", link:"#portfolioModal4"},
    {pic:"safe", link:"#portfolioModal5"},
    {pic:"submarine", link:"#portfolioModal6"}
];

let footerModel = [
      {title: "Location", content: "New Delhi, India" },
      {title: "Around the Web", content: [
        {link: "https://fb.me/shubhamoy", social:"facebook"},
        {link: "https://plus.google.com/+ShubhamoyChakrabarty", social:"google-plus"},
        {link: "https://twitter.com", social:"twitter"},
        {link: "https://linkedin.com/in/shubhamoy", social:"linkedin"}
      ]},
      {title: "About Me",
       content: "Shubhamoy loves to experiment with new technologies. Presently he's working with ReactJS :)"}
];

let mv = {
  header: {view: Header, model: headerModel, label: "Home"},
  portfolio: {view: Portfolio, model: portfolioModel, label: "Portfolio"},
  about: {view: About, label: "About"},
  contact: {view: Contact, label: "Contact"},
  footer: {model: footerModel}
}

ReactDOM.render(<App data={mv}
                     ntitle={navTitle}
                     owner={siteOwner} />, document.getElementById('page-top'));