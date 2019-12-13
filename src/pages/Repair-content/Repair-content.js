import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import api from '../../common/api'
export default class Parent extends Component {
    state = {
        user: {
            username: "",
            repairId: "",
            content: "",
            time: ""
        }
    }
    input() {
        console.log(this.state.user)
        this.$axios({
            url: api.addRepairComment,
            params: this.state.user,
            // console.log(this.state.user)
        }).then(res => {
            console.log(res)
            if (res.data.isok) {
                if (this.state.user.content){
                    // user:
                    alert(res.data.info)
                    this.props.history.go(-1)
                }
            }
        })
    }
    componentDidMount() {
        this.state.user.time = new Date().getTime()
        this.state.user.repairId = this.props.match.params.id
        this.state.user.name = localStorage.getItem("username")
    }
    change(props, e) {
        let user = this.state.user
        user[props] = e.target.value

        this.setState({
            user
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h3>请评论</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
                <div className="wc-text">
                    <textarea name="" id="" cols="30" rows="10"
                        value={this.state.user.content}
                        onChange={this.change.bind(this, 'content')}
                    ></textarea>

                </div>
                <div className="wc-btn">
                    <button onClick={this.input.bind(this)}>确定</button>
                </div>
            </div>
        )
    }
}