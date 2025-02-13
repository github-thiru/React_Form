import { Component } from "react";
import Loginform  from "./Form.jsx";

class App extends Component{
    constructor(){
  super()
    }
    render(){
        return(
<>
<h1>App.jsx</h1>
<Loginform />
</>
        )
    }
}

export default App