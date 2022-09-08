import React, { Component } from "react";
import LikeIdolContext from "../Context/LikeIdolContext";
import listIdols from "../DataIdol";
export default class LikeIdolProvider extends Component {
  state = {
    // listIdols: [
    //   {
    //     id: 1,
    //     name: "Đào Lê Phương Hoa",
    //     age: 23,
    //     img: "./img/idol/idol1.jpg",
    //     like: 0,
    //     active: true,
    //   },
    //   {
    //     id: 2,
    //     name: "Suni Hạ Linh",
    //     age: 25,
    //     img: "./img/idol/idol2.jpg",
    //     like: 0,
    //     active: false,
    //   },
    //   {
    //     id: 3,
    //     name: "Phương Ly",
    //     age: 27,
    //     img: "./img/idol/idol3.jpg",
    //     like: 0,
    //     active: false,
    //   },
    //   {
    //     id: 4,
    //     name: "Emmy Đặng",
    //     age: 26,
    //     img: "./img/idol/idol4.jpg",
    //     like: 0,
    //     active: false,
    //   },
    // ],
    listIdols: listIdols,
  };

  setActiveAndLike = (id) => {
    let listIdolsUpdate = this.state.listIdols.map((idol, index) => {
      if (idol.id === id) {
        idol.active = true;
        idol.like += 1;
      } else {
        idol.active = false;
      }
      return { ...idol };
    });

    this.setState({
      listIdols: listIdolsUpdate,
    });
  };
  render() {
    return (
      <LikeIdolContext.Provider
        value={{
          listIdols: this.state.listIdols,
          setActiveAndLike: this.setActiveAndLike,
        }}
      >
        {this.props.children}
      </LikeIdolContext.Provider>
    );
  }
}
