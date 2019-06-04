import React from 'react';
import './App.css';
import marked from 'marked';

const defaultInput = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)";

marked.setOptions({
  gfm: true,
  breaks: true
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultInput
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  // componentWillMount() {
  //   this.setState({
        // to get screen width
  //     width: window.innerWidth
  //   });
  // }
  handleChange(e) {    
    this.setState({
      input: e.target.value
    })
  }
  handleScroll() {
    // to get scroll position
    let scrollPos = document.getElementById("editor").scrollTop * 
                    (document.getElementById('preview').scrollHeight -
                    document.getElementById('preview').clientHeight) /
                    (document.getElementById('editor').scrollHeight -
                    document.getElementById('editor').clientHeight);

    document.getElementById('preview').scrollTo(0, parseInt(scrollPos));
  }
  componentDidMount() {
    // to output markdown and open link up in a new tap
    document.getElementById("preview").innerHTML = marked(this.state.input).replace(/<a/, '<a target="_blank"');
  }
  componentDidUpdate() {
    document.getElementById("preview").innerHTML = marked(this.state.input).replace(/<a/, '<a target="_blank"');
  }
  render() {    
    return (
      <div id="app">
        {/* default text contains valid markdown */}
        <div id="wrapEditor">
          <div className="toolbar">
            {/* <h4>Editor{this.state.width}</h4> */}
            <h4>Editor</h4>
          </div>
          <textarea id="editor" onChange={this.handleChange} onScroll={this.handleScroll}>{this.state.input}</textarea>
        </div>
        {/* using marked library */}
        <div id="wrapPreviewer">
          <div className="toolbar">
            <h4>Previewer</h4>
          </div>
          <div id="preview"></div>
        </div>
      </div>
    );
  }
}
export default App;
