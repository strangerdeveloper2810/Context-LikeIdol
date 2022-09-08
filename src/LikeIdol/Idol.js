import React, { Component } from "react";

export default class Idol extends Component {
  render() {
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
            src="./img/idol/idol1.jpg"
            width={300}
            height={350}
            alt="idol"
          />
          <div className="card-body">
            <h4 className="card-title fs-5">Tên: Đào Lê Phương Hoa</h4>
            <p className="card-text">Tuổi: 23</p>
            <button className="btn btn-info">0 ❤️</button>
          </div>
        </div>
      </div>
    );
  }
}
