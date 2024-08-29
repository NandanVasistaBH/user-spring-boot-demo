import React from "react"
export default class ClassComp extends React.Component{
    render(){
        return(
            <div> 
                <div>
                  this is a react class component
                  </div>
                  <h1>{this.props.msg}</h1>
                  
            </div>
        )
    }
}