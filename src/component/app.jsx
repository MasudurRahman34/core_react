import React, { Component } from "react";
// import Profile from './profile';
// import Navbar from './profile/navbar';
class App extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        bio: "",
        country: "",
        skills: [],
        gender: "",
        agree: false
    }

    handleOnChangeEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleOnClickEvent = (event) => {
        console.log(this.state)
    }

    handleCheckbox=(event)=>{
        this.setState({
            agree : event.target.checked
        })
    }
    handleSkillsChange=(event)=>{
        if(event.target.checked){
            this.setState({
                skills:[...this.state.skills,event.target.value]
            });
        }else{
            const skills= this.state.skills.filter(skill=>skill !== event.target.value)
            this.setState({skills});
        }
    }


    render() {
        const { name, email, password, bio, country , skills, agree } = this.state
        return (
            <div id="App">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2  mt-5">
                            <div className="alert alert-dark" role="alert">
                                <h3 className="text-center">simple form</h3>
                            </div>
                            {/* <form action=""> */}
                            <div className="form-group">

                                <input type="text" value={name} onChange={this.handleOnChangeEvent} className="form-control my-2" placeholder="Name" id="name" name="name" />

                                <input type="email" value={email} onChange={this.handleOnChangeEvent} className="form-control my-2" placeholder="Email" id="email" name="email" />

                                <input type="password" value={password} onChange={this.handleOnChangeEvent} className="form-control my-2" placeholder="password" id="password" name="password" />


                                <textarea value={bio} cols="30" rows="10" className="form-control my-2" onChange={this.handleOnChangeEvent} placeholder="bio" id="bio" name="bio">Bio</textarea>

                                <select className="form-control my-2" value={country} onChange={this.handleOnChangeEvent} name="country" id="country">
                                    <option>please select country</option>
                                    <option value="bangladesh">bangladesh</option>
                                    <option value="india">india</option>
                                    <option value="keniye">keniye</option>
                                    <option value="uk">uk</option>
                                    <option value="usa">usa</option>
                                    <option value="france">france</option>
                                </select>


                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={this.handleOnChangeEvent}/>
                                <label className="form-check-label" htmlFor="male" >Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={this.handleOnChangeEvent} />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="other" value="other" onChange={this.handleOnChangeEvent} />
                                <label className="form-check-label" htmlFor="other">other</label>
                            </div>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1"name="skills" value="php" onChange={this.handleSkillsChange} checked={skills.includes('php')} />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">php</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2"name="skills" value="laravel" onChange={this.handleSkillsChange} checked={skills.includes('laravel')}/>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">laravel</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="skills" value="react" onChange={this.handleSkillsChange} checked={skills.includes('react')} />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">React</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="agree" name="agree" checked={agree} onChange={this.handleCheckbox}/>
                                <label className="form-check-label" htmlFor="agree">i agree all the terms and conditions</label>
                            </div>

                            <div className="">
                                <button className="btn btn-primary my-2" onClick={this.handleOnClickEvent} >show data</button>
                            </div>
                            {/* </form> */}

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default App