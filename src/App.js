import React from 'react';
import {DATA} from './data.js'
import './App.css';
import DenceTable from './my-table'




class App extends React.Component {
  constructor(){
    super()
    this.state = {data:null}
  }

  createFetch (){
    return new Promise(function(resolve){
      resolve({
        ...DATA,
        'rates': Object.entries(DATA.rates).map((e) => ( { [e[0]]: e[1] } ))
      })
    })
  }
  componentDidMount(){
    this.createFetch().then(response => this.setState({data : response}))

  }

  render(){
    
    return (
      <div align='center'>
        
       {(this.state.data!==null)? <DenceTable dataObj={this.state.data}/> : <p>STILL LOADING</p>}
       
      </div>
  )
  }


}

export default App;
