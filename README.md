# Sharp you React Skill

## Main Concepts

1. Hello world

`npx create-react-app appName`

src/index.js is endpoint, public/index.html is template.

2. Introducing JSX

like a template language mix HTML and JavaScript.

3. Rendering Elements

ReactDOM.render(ReactElement, DOMElement)

Thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.

4. Components and Props

You can define a function with a `props` argument or a class extends React.Component. function name should be upper. If function don't modify its own props, those functions are called "pure". 

5. State and Lifecycle

Firstly, need a class extends from React.Component with a render method, this method will be called each time an update happens, but as long as we render <Clock /> into the same DOMnode, only a single instance of the Clock class will be used.

Secondly, add local state to a class. means you can access from `this.state.someattribute`; meanwhile, add a class constructor that assigns the initial `this.state`, eg:

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Thirdly, add lifecycle method to a class. we want to set up a timer whenever the Click is rendered to the DOM for the first time, this is called "mount" in React. (correspond have "unmount"). Special methods on the component class to run some code when a component mounts and unmounts.

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

These method are called "lifecycle methods"

Complete Example:

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

6. Handling Events

Handleing events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

a. React events are named using camelCase, rather than lowercase.

b. With JSX you pass a function as the event handler, rather than a string.

eg:

HTML
```
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

React
```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

Another difference is that you cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly. eg:

HTML
```
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

React
```
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

6. Handling Event

`<CustomerComponnent onClick={this.someFunc} />`

7. Conditional Readering

`a > 1 && some_expression`

`conditional ? true : false`

`return null`

8. Lists and Keys

```json
numbers = [1, 2, 3, 4, 5]
numbers.map(
    (n) => x * x
)
```

`<CustomeComponent key={todo.id} />`
