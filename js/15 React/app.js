const API_KEY = 'eb5a2aa0';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
const options ={
    method: 'GET'
}
class App extends React.Component{
    constructor(props){
      super(props);
      this.state ={
            searchValue:'',
            searchResults:[]
      }
    } 
    inputHandler = (event) => {
      event.preventDefault();
      this.setState({
        searchValue:event.target.value
      })

    }
    searchHandler =(event)=>{
      event.preventDefault();
      console.log(this.state.searchValue);
      let localUrl = `${BASE_URL}&s=${this.state.searchValue}`
      fetch(localUrl,options)
          .then(res =>res.json())
          .then(res =>this.setState({searchResults:res.Search}))
          .catch(err =>console.log('error'))
    }

    render(){
      return(
        <div className="container">
            <div className="card">
              <div className="row mt-2">
                <div className="col-8">
                  <input type="search" className="form-control" onChange={this.inputHandler}/>
                </div>            
                <div className="col-4">
                  <button className="btn btn-info" onClick={this.searchHandler}>Search</button>
                </div>

                </div>
                <div className="row mt-2">
               
                <div className="col-4">
                      <h1>Results for:{this.state.length} <span className="badge bg-secondary">{this.state.searchResults.length}</span> </h1> 
                 </div>

                </div>
            </div>
        </div>
      )
    }
  }
 
 
    const app = document.getElementById('app');
    const root = ReactDOM.createRoot(app);
    root.render(React.createElement(App));

 