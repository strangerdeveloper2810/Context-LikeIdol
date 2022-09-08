import React, { Component } from "react";
import ListIdols from "./ListIdols";
import ProfileIdol from "./ProfileIdol";
import LikeIdolProvider from "./Provider/LikeIdolProvider";

export default class LikeIdols extends Component {
  render() {
    return (
      <LikeIdolProvider>
        <div className="container">
          <ProfileIdol />
          <ListIdols />
        </div>
      </LikeIdolProvider>
    );
  }
}
