import React, { Component } from 'react'

export default class App extends Component {
    render() {
      return (
        <div>
          <ChildCpn name="tom" age={18} />
        </div>
      );
    }
  }
  function ChildCpn(props){
      const {name,age}=props
      return(
          <div>
              <h2>{name+age}</h2>
          </div>
      )
    
  }