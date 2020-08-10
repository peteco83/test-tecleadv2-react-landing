import React, { Component, createRef } from "react";
import "./style/hero.scss";
import alpine from "./images/alpine-5455013_1920.jpg";

export default class Hero extends Component {
  aboutRef = createRef(null);
  statementRef = createRef(null);

  constructor() {
    super();
    this.state = {
      statementScroll: false,
    };
  }

  componentDidMount() {
    const statementComponentBottomPosition = this.statementRef.current.getBoundingClientRect()
      .bottom;

    window.addEventListener("scroll", () => {
      // the margin-top about should be - to the aboutComponentBottomPosition
      const aboutComponentBottomPosition = (this.aboutRef.current.getBoundingClientRect()
        .top) - 100;
      if (statementComponentBottomPosition >= aboutComponentBottomPosition) {
        this.setState({ statementScroll: true });
      } else {
        this.setState({ statementScroll: false });
      }
    });
  }

  // https://reactjs.org/docs/react-component.html#unsafe_componentwillmount
  // componentWillUnmount() {
  //   window.removeEventListener("scroll");
  // }

  render() {
    return (
      <>
        <div className="hero">
          <img src={alpine} alt="hero"></img>
          <div className="hero__container">
            <div
              ref={this.statementRef}
              className={
                this.state.statementScroll
                  ? `hero__statement--relative`
                  : `hero__statement--fixed`
              }
            >
              <h1>We combine our technical expertise with know-how</h1>
            </div>

            <div className="hero__about">
              <p className="hero__about__text" ref={this.aboutRef}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi eum pariatur atque quae cum, eaque corrupti fuga
                doloremque minus nihil, sapiente possimus illo ipsum nobis
                cumque odio veniam aspernatur officiis. Commodi quos deserunt
                maxime iure est
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
