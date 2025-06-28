import { Component, PureComponent } from "react";
import NormalComponent from "./NormalComponent";

class ParentPureCom extends Component{
     constructor(){
        super();
        this.state = {
            name: "Ajay",
        }
     }
      componentDidMount() {
        setInterval( () => {
               this.setState({ name: "Ajay" });    
        },2000)
      }
     render(){
         console.log("Parent Pure Comp ")
        return <>
           <h2 className="text-white">Parent Pure Comp </h2>
           <NormalComponent name={this.state.name}  />
           <PureComponent name={this.state.name} />
        </>
     }
}

 export default ParentPureCom;