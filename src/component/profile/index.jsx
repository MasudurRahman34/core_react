import React, { Component } from "react";
import Bio from "./bio";
import Skills from "./skills";
import './profile.style.css';

// const name="Md Masudur Rahman Shuvo";



class Profile extends Component {
    me = {
        name: 'Md. Masudur Rahman',
        title: 'Fullstack javascript developer, Enterpreneur and Trainer'

    }
    render() {
        return (
            <div className="container">
                <Bio name={this.me.name} title={this.me.title} />
                <Skills
                    skillA={'php'}
                    skillB={'Javascript'}
                    skillC={'Laravel'}
                />
                <p>{new Date().toISOString()}</p>
            </div>
        );
    }
}
export default Profile;