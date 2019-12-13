import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Parent extends Component {
    goBack() {
        this.props.history.go(-1)
    }
    render() {
        return (
            // <button onClick={() => this.goBack()}>返回</button>
            <span className="icon iconfont " onClick={()=>this.goBack()}>&#xe67a;</span>
        )
    }
}
export default withRouter(Parent)