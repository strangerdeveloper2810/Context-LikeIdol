import React, { Component } from "react";

export default class ProfileIdol extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-success text-center mt-3">Profile</h3>
        <div
          className="card bg-primary bg-gradient"
          style={{
            width: "300px",
            height: "500px",
            position: "relative",
            left: "500px",
          }}
        >
          <img
            className="card-img-top"
            src="./img/idol/idol1.jpg"
            width={300}
            height={350}
            alt="idol"
          />
          <div className="card-body">
            <h4 className="card-title fs-5">Tên: Đào Lê Phương Hoa</h4>
            <p className="card-text">Tuổi: 23</p>
            <p className="card-text">Lượt thích: 0 ❤️</p>
          </div>
        </div>
      </div>
    );
  }
}
