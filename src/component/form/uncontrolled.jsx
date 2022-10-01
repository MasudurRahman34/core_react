import React from "react";
class UncontrolledForm extends React.Component {
 handleSubmit = event =>{
    event.preventDefault();
    const data={};
    data.name=event.target.name.value;
    data.email=event.target.email.value;
    data.password=event.target.password.value;
    console.log(data);
    event.target.reset();
}

    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2  mt-5">
                    <div className="alert alert-dark" role="alert">
                        <h3 className="text-center">Uncontrolled form</h3>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            className="form-control" 
                            type="text"
                            name="name"
                            placeholder="name" 
                        />
                        <input 
                            className="form-control" 
                            type="email"
                            name="email"
                            placeholder="email" 
                        />
                        <input 
                            className="form-control" 
                            type="password"
                            name="password"
                            placeholder="password" 
                        />
                        <button className="btn btn-success my-2" type="submit">Submit</button>
                        
                    </form>
                    
                </div>
            </div>
        </div>
        );
    }
}
export default UncontrolledForm;