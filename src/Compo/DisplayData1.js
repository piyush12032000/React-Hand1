import React,{useState , Component} from "react"
import ClassCompo1 from "./ClassCompo1"
import FunctionCompo1 from "./FunctonCompo1"
import "./Style.css"


function DisplayData1(){
    const [count , setCount] = useState(false)
    console.log(count)
return(
    <div>
        <button className="btn1" onClick={()=>setCount(!count)}>To see styling in functional Component</button>
    {count ? <FunctionCompo1/>:""}
    </div>

)
}

export default DisplayData1


class DisplayDataClass1 extends Component{
constructor(){
    super();
    this.state ={
        buttonVal:false,
    }
}
render(){
    return(
        <div>
<button className="btn2" onClick={()=> this.setState({buttonVal:!this.state.buttonVal})}>To see styling in class Component</button>
       {this.state.buttonVal ? <ClassCompo1 />: "" }
        </div>

    )
}
}
export  {DisplayDataClass1}