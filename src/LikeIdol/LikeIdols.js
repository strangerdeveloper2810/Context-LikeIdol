import React, { Component } from 'react'
import ListIdols from './ListIdols'
import ProfileIdol from './ProfileIdol'

export default class LikeIdols extends Component {
  render() {
    return (
      <div className='container'>
        <ProfileIdol/>
        <ListIdols/>
      </div>
    )
  }
}
