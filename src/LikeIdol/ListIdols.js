import React, { Component } from "react";
import LikeIdolContext from "./Context/LikeIdolContext";
import Idol from "./Idol";

export default class ListIdols extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h3 className="text-success">Danh Sách Idols</h3>
        <LikeIdolContext.Consumer>
            {(value)=>{
                return(
                    <div className="row">
                        {value.listIdols.map((idol, index)=> {
                            return(
                                <Idol key={index} idol={idol}/>
                            );
                        })}
                    </div>
                );
            }}
        </LikeIdolContext.Consumer>
      </div>
    );
  }
}
