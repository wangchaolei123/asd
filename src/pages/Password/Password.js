import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import api from '../../common/api'
export default class Parent extends Component {
    state = {

        user: {
            name: "",
            oldpass: "",
            newpass: ""
        },
        confirm: ""
    }

    modify() {
        if (this.state.user.name === localStorage.getItem("username")) {
            if (this.state.user.oldpass = localStorage.getItem("userpass")) {
                if (this.state.user.oldpass !== this.state.user.newpass) {
                    this.$axios({
                        url: api.changePassUser,
                        method: "post",
                        data: this.state.user
                    }).then(res => {
                        console.log(res)
                        if (res.data.isok) {
                            this.props.history.push("/login")
                        } else {
                            alert("错误")
                        }
                    })
                }
            }
        }
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
                    <h3>修改密码</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
                <div className="user">
                    <span className="icon iconfont icon-phone tel"></span>
                    <input type="text" placeholder="账号"
                        value={this.state.user.name}
                        onChange={this.change.bind(this, 'name')}
                    />
                </div>

                <div className="pass">
                    <span className="icon iconfont pas">&#xe60b;</span>
                    <input type="password" placeholder="旧密码"
                        value={this.state.user.oldpass}
                        onChange={this.change.bind(this, 'oldpass')}
                    />
                </div>
                <div className="pass">
                    <span className="icon iconfont pas">&#xe60b;</span>
                    <input type="password" placeholder="新密码"
                        value={this.state.user.newpass}
                        onChange={this.change.bind(this, 'newpass')}
                    />
                </div>
                {/* <div className="pass">
                    <span className="icon iconfont pas">&#xe60b;</span>
                    <input type="password" placeholder="再次输入密码"
                        value={this.state.confirm}
                        onChange={this.change.bind(this, "confirm")}
                    />
                </div> */}

                <div className="reg" >
                    <button onClick={this.modify.bind(this)}>确认修改</button>
                </div>
            </div>
        )
    }
}