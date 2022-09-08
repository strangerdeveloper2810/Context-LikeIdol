import React, { Component } from "react";
import Idol from "./Idol";

export default class ListIdols extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h3 className="text-success">Danh Sách Idols</h3>
        <div className="row">
          <Idol />
          <Idol />
          <Idol />
          <Idol />
        </div>
      </div>
    );
  }
}
