class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      counter: 0,
    }
  }
  render() {
    return React.createElement('div',null,[
      React.createElement ("button",
      {
        onClick: () => {
          this.setState({
             counter:this.state.counter+1
          })
          
        },
      },
      "click me")
     , 
      React.createElement('span', { key:'myCounter'},this.state.counter)
  ])
}
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App));
