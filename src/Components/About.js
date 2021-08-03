import React, { Component } from "react";

class About extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var profilepic = "images/" + this.props.data.image;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img
                            className="profile-pic"
                            src={profilepic}
                            alt="Henry Woo Profile Pic"
                        />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            {bio}
                            <br />
                            My favorite language of choice is{" "}
                            <span>Python</span>.
                            <br />
                            <span>React (Javascript)</span> is my preference for
                            application development and design.
                            <br />
                        </p>

                        <p>
                            {" "}
                            In my freetime, I play badminton, work on my golf
                            game, game online with friends, and tinker on side
                            projects.
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    {/* <span>{name}</span>
                                    <br />
                                    <span>
                                        {street}
                                        <br />
                                        {city} {state}, {zip}
                                    </span>
                                    <br /> */}
                                    <span>{email}</span>
                                    <br />
                                    <span>{phone}</span>
                                </p>
                            </div>
                            {/* <div className="columns download">
                                <p>
                                    <a href={resumeDownload} className="button">
                                        <i className="fa fa-download"></i>
                                        Resume
                                    </a>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
