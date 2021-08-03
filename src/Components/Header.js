import React, { Component } from "react";
import { fadeIn, fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
    fadeIn: {
        animation: "x 1s",
        animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
    fadeInDown: {
        animation: "x 1s",
        animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
    },
};

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
                <div id="skyline">
                    <img
                        src="images/chicago_skyline.png"
                        id="skyline-img"
                        alt="blue chicago skyline"
                    />
                </div>

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

                    {/* <StyleRoot> */}
                    {/* <ul id="nav" style={styles.fadeInDown}> */}
                    <ul id="nav">
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
                                Experience
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#portfolio">
                                Projects
                            </a>
                        </li>
                    </ul>
                    {/* </StyleRoot> */}
                </nav>

                <div className="banner">
                    <StyleRoot>
                        <div className="banner-text" style={styles.fadeIn}>
                            <div id="cartoon-container">
                                <img src="images/me_cartoon.png" />
                            </div>
                            <div id="hero-text">
                                <h3>Hi, I'm</h3>
                                <h1 className="responsive-headline">{name}</h1>
                                <h3>
                                    Chicago-based <span>{occupation}</span>
                                    <br />
                                    & <br />
                                    Recent graduate from{" "}
                                    <a
                                        className="uiuc"
                                        href="https://illinois.edu/"
                                    >
                                        UIUC
                                    </a>{" "}
                                </h3>
                                <br />
                                <h3>{description}</h3>
                                <br />
                                <h3>{mission}</h3>
                                <hr />
                                <ul className="social">{networks}</ul>
                                {/* <div className="banner-background" /> */}
                            </div>
                        </div>
                    </StyleRoot>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about">
                            <i className="icon-down-circle"></i>
                        </a>
                    </p>
                </div>
            </header>
        );
    }
}

export default Header;
