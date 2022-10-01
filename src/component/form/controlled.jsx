import React from "react";
class ControlledFormForm extends React.Component{
   
   state={
    name:'',
    email:'',
    password:''
   };
   
 
    handleChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({
            name:'',
            email:'',
            password:''
        });
    }
    render(){
        const {name,email,password }=this.state;
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2  mt-5">
                    <div className="alert alert-dark" role="alert">
                        <h3 className="text-center">Controlled form</h3>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            className="form-control" 
                            type="text"
                            name="name"
                            placeholder="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                        <input 
                            className="form-control" 
                            type="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                        <input 
                            className="form-control" 
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        <button className="btn btn-success my-2" type="submit">Submit</button>
                        
                    </form>
                    
                </div>
            </div>
        </div>
        );
    }

}
export default ControlledFormForm;