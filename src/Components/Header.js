import React, { Component } from "react";

class Header extends Component {
    render() {
        console.log(this.props);
        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var mission = this.props.data.mission;
            var description = this.props.data.description;
            var networks = this.props.data.social.map((network) => {
                if (network.name) {
                    return (
                        <li key={network.name}>
                            <a href={network.url}>
                                <i className={network.className}></i>
                            </a>
                        </li>
                    );
                }
            });
        }

        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a
                        className="mobile-btn"
                        href="#nav-wrap"
                        title="Show navigation"
                    >
                        Show navigation
                    </a>
                    <a
                        className="mobile-btn"
                        href="#home"
                        title="Hide navigation"
                    >
                        Hide navigation
                    </a>

                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">
                                Experiences
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#portfolio">
                                Projects
                            </a>
                        </li>
                        {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                        {/* <li>
                            <a className="smoothscroll" href="#contact">
                                Contact
                            </a>
                        </li> */}
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {name}</h1>
                        <h3>
                            Chicago-based <span>{occupation}</span> and recent
                            graduate from the{" "}
                            <a className="uiuc" href="https://illinois.edu/">
                                University of Illinois at Urbana-Champaign
                            </a>
                            .
                        </h3>
                        <br />
                        <h3>{description}</h3>
                        <br />
                        <h3>{mission}</h3>
                        <hr />
                        <ul className="social">{networks}</ul>
                        <div className="banner-background" />
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}

export default Header;
