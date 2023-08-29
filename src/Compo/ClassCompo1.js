import {Component} from "react"
import "./Style.css"

class ClassCompo extends Component{
render(){
    return(
        <div className="app1">
        <h2>This is created Using class Component</h2>
    <p>This is done using external CSS </p>
    <p style={{color:"blue"}}>This is done using inline CSS </p>
    </div>
    )
}
}
export default ClassCompo;
