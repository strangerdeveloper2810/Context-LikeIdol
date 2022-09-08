import React, { Component } from "react";

export default class Idol extends Component {
  render() {
    const {idol} = this.props;
    return (
      <div className="col-3">
        <div
          className="card bg-primary bg-gradient"
          style={{
            width: "300px",
            height: "500px",
          }}
        >
          <img
            className="card-img-top"
            src= {idol.img}
            width={300}
            height={350}
            alt={idol.name}
          />
          <div className="card-body">
            <h4 className="card-title fs-5">Tên: {idol.name}</h4>
            <p className="card-text">Tuổi: {idol.age}</p>
            <button className="btn btn-info">{idol.like}❤️</button>
          </div>
        </div>
      </div>
    );
  }
}
