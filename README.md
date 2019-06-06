# Front End Libraries Projects - Build a Markdown Previewer

Objective: Build a CodePen.io app that is functionally similar to this: [Sample](https://codepen.io/freeCodeCamp/full/GrZVVO).

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story:**

1. I can see a textarea element with a corresponding `id="editor"`.

2. I can see an element with a corresponding `id="preview"`.

3. When I enter text into the `#editor` element, the #preview element is updated as I type to display the content of the `textarea`.

4. When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: [https://cdnjs.com/libraries/marked](https://cdnjs.com/libraries/marked)).

5. When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

6. When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the #preview element.

**Optional Bonus** (you do not need to make this test pass): When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).

**Optional Bonus** (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.

You can build your project by forking this CodePen pen. Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

**Note:**

Using marked

- npm install marked
- On App.js

  ```jsx
  import marked from ‘marked’;
  // set marked option to use new line
  marked.setOptions({
    gfm: true,
    breaks: true
  });
  // to handle changing text
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  // to use default preview
  componentDidMount() {
  // to output markdown and open link up in a new tap
    document.getElementById(‘preview’).innerHTML = marked(this.state.input).replace(/<a/, ‘<a target=”_blank”’);
  }
  // to update changed text
  componentDidUpdate() {
    document.getElementById(‘preview’).innerHTML = marked(this.state.input).replace(/<a/, ‘<a target=”_blank”’);
  }
  ```

To control preview scroll bar by the editor

- On App.js

  ```jsx
  handleScroll() {
    // to get scroll position
    let scrollPos = document.getElementById(‘editor’).scrollTop * 
                          (document.getElementById(‘preview’).scrollHeight –
                          document.getElementById(‘preview’).clientHeight) /
                          (document.getElementById(‘editor’).scrollHeight –
                          document.getElementById(‘editor’).clientHeight);
    // to set preview scroll position
    document.getElementById(‘preview’).scrollTo(0, parseInt(scrollPos));
  }

  <textarea id=”editor” onChange={this.handleChange} onScroll={this.handleScroll}>
  ```
