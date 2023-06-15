import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import SkillsMenu from "./SkillsMenu.js";

export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="skills" />
        <SkillsMenu />
      </>
    );
  }
}
