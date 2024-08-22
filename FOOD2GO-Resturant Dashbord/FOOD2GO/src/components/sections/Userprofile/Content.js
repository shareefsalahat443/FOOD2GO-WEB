import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from "react-bootstrap";

import customerimg from '../../../assets/img/FOOD2GO/shareef111.jpg';

class Content extends Component {
    state = {
        editingBasic: false,
        editingAboutMe: false,
        fullName: 'NAJAH Resturant',
        language: 'English (US)',
        website: 'www.example.com',
        phone: '+123 456 789',
        email: 'example@mail.com',
        location: 'New York, USA',
        aboutMe: 'Shareef Salahat ...................',
        profilePhoto: customerimg,
        coverPhoto: customerimg
    };

    toggleEditBasic = () => {
        this.setState({ editingBasic: !this.state.editingBasic });
    };

    toggleEditAboutMe = () => {
        this.setState({ editingAboutMe: !this.state.editingAboutMe });
    };

    handleChange = (event, field) => {
        this.setState({ [field]: event.target.value });
    };

    handlePhotoChange = (event, field) => {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({ [field]: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    handleSubmitBasic = (event) => {
        event.preventDefault();
        this.toggleEditBasic(); // Save data and exit edit mode for Basic Information
        // Optionally, send data to the server here
    };

    handleSubmitAboutMe = (event) => {
        event.preventDefault();
        this.toggleEditAboutMe(); // Save data and exit edit mode for About Me
        // Optionally, send data to the server here
    };

    render() {
        const { editingBasic, editingAboutMe, fullName, language, website, phone, email, location, aboutMe, profilePhoto, coverPhoto } = this.state;
        return (
            <div className="ms-content-wrapper">
                <div className="ms-profile-overview">
                    <div className="ms-profile-cover" style={{ backgroundImage: `url(${coverPhoto})`, position: 'relative' }}>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={input => this.coverPhotoInput = input}
                            onChange={(e) => this.handlePhotoChange(e, 'coverPhoto')}
                        />
                        <button 
                            className="btn btn-primary cover-photo-button"
                            style={{ position: 'absolute', top: '10px', right: '10px' }}
                            onClick={() => this.coverPhotoInput.click()}>
                            Change Cover Photo
                        </button>
                        <div style={{ position: 'relative' }}>
                            <img className="ms-profile-img" src={profilePhoto} alt="people" style={{ display: 'block', margin: 'auto' }} />
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                ref={input => this.profilePhotoInput = input}
                                onChange={(e) => this.handlePhotoChange(e, 'profilePhoto')}
                            />
                            <button 
                                className="btn btn-primary profile-photo-button"
                                style={{ position: 'absolute', bottom: '10px', right: '10px' }}
                                onClick={() => this.profilePhotoInput.click()}>
                                Change Profile Photo
                            </button>
                        </div>
                        <div className="ms-profile-user-info">
                            <h4 className="ms-profile-username text-white">NAJAH Resturant</h4>
                            <Link to="#" className="btn btn-primary" onClick={this.toggleEditBasic}>
                                <i className="material-icons">edit</i> Edit Basic Info
                            </Link>
                        </div>
                    </div>
                    <Tab.Container defaultActiveKey="tab1">
                        <Nav variant="tabs" className="ms-profile-navigation tabs-bordered">
                            <Nav.Item>
                                <Nav.Link eventKey="tab1">Overview</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Tab.Container>
                </div>
                <div className="row">
                    <div className="col-xl-7 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-body">
                                <h2 className="section-title">About Me</h2>
                                {editingAboutMe ? (
                                    <form onSubmit={this.handleSubmitAboutMe}>
                                        <textarea value={aboutMe} onChange={(e) => this.handleChange(e, 'aboutMe')} rows="4" style={{ width: '100%' }} />
                                        <button type="submit" className="btn btn-success">Save Changes</button>
                                    </form>
                                ) : (
                                    <>
                                        <p>{aboutMe}</p>
                                        <button onClick={this.toggleEditAboutMe} className="btn btn-primary">
                                            <i className="material-icons">edit</i> Edit About Me
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-body">
                                <h2 className="section-title">Basic Information</h2>
                                <form onSubmit={this.handleSubmitBasic}>
                                    <table className="table ms-profile-information">
                                        <tbody>
                                            {editingBasic ? (
                                                <>
                                                    <tr>
                                                        <th scope="row">Full Name</th>
                                                        <td><input type="text" value={fullName} onChange={(e) => this.handleChange(e, 'fullName')} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Language</th>
                                                        <td><input type="text" value={language} onChange={(e) => this.handleChange(e, 'language')} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Website</th>
                                                        <td><input type="text" value={website} onChange={(e) => this.handleChange(e, 'website')} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Phone Number</th>
                                                        <td><input type="text" value={phone} onChange={(e) => this.handleChange(e, 'phone')} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Email Address</th>
                                                        <td><input type="email" value={email} onChange={(e) => this.handleChange(e, 'email')} /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Location</th>
                                                        <td><input type="text" value={location} onChange={(e) => this.handleChange(e, 'location')} /></td>
                                                    </tr>
                                                </>
                                            ) : (
                                                <>
                                                    <tr>
                                                        <th scope="row">Full Name</th>
                                                        <td>{fullName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Language</th>
                                                        <td>{language}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Website</th>
                                                        <td>{website}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Phone Number</th>
                                                        <td>{phone}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Email Address</th>
                                                        <td>{email}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Location</th>
                                                        <td>{location}</td>
                                                    </tr>
                                                </>
                                            )}
                                        </tbody>
                                    </table>
                                    {editingBasic && <button type="submit" className="btn btn-success">Save Changes</button>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
