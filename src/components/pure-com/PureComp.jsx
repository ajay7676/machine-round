import { PureComponent } from "react";

class PureComp  extends PureComponent{
     render(){
        console.log("Pure Component Render")
        return  <h3 className="text-white">Pure Component : </h3>
     }

}

 export default PureComp;