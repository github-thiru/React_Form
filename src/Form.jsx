import { Component } from "react";

class Loginform extends Component{
    constructor(){
        super()
        this.state={
            username:"",
            email:"",
            password:"",
            formdata:[]
        }
    }

   

    names=(ev)=>{
        this.setState({username:ev.target.value})
    }
    emails=(ev)=>{
        this.setState({email:ev.target.value})
    }
    passwords=(ev)=>{
        this.setState({password:ev.target.value})
    }

    submittedform = (ev) => {
        ev.preventDefault();
        const { username, email, password, formdata } = this.state; // destrucring... this.state..
        const newFormData = { username, email, password }; // new from data... created..
        this.setState({ formdata: [...formdata, newFormData], username: "", email: "", password: "" });
        ev.target.reset(); // reset the fields..... 
    }

    render(){
        console.log(this.state.username)
        console.log(this.state.email)
        console.log(this.state.password)
        return(
            <>
            <h1>Forms</h1>
            <form action="" onSubmit={this.submittedform}>
                <label htmlFor="username">UserName:</label>
                <input type="text" placeholder="Enter name" name="username" onChange={this.names} /> <br />
                
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter email" name="email" onChange={this.emails} /> <br />
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter password" name="password" onChange={this.passwords} /> <br />

                <button type="submit" >Submit</button>
            </form>
            <div style={{border:"2px solid blue"}}>
                {this.state.formdata.length > 0 && (
                    <div style={{border:"2px solid black"}}>
                        <h2>Submitted Data</h2>
                        <ul>
                            {this.state.formdata.map((data, index) => (
                                <li key={index}>
                                    <p>Username: {data.username}</p>
                                    <p>Email: {data.email}</p>
                                    <p>Password: {data.password}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            </>
        )
    }
}

export default Loginform


{/* <Loginform /> ---> in app.jsx file */}