import React, { Component } from 'react'
import Back from '../../views/Back/Back'
export default class Parent extends Component{
    render(){
        return(
            <div>
                    <div className="header">
                    <Back></Back>
                    <h3>我的收藏</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
            </div>
        )
    }
}