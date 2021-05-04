import React, { Component } from 'react'

export default class FaceBook extends Component {
    render() {
        const profile = this.props.profiles.map((profile, index) => (
            <div key={index} className="profile-container">
                <img src={profile.img} alt=""/>
                <div className="info-container">
                    <p><strong>First Name:</strong> {profile.firstName}</p>
                    <p><strong>Last Name:</strong> {profile.lastName}</p>
                    <p><strong>Country:</strong> {profile.country}</p>
                    <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                </div>
            </div>
        ));

        return (
            <div>
                {profile}
            </div>
        )
    }
}
