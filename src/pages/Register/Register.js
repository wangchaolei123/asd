import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import '../Register/register.styl'
import api from '../../common/api'
export default class Parent extends Component {
    state = {
        user: {
            name: "",
            pass: "",
            tel: ""
        }
    }
 
    reg() {
        this.$axios({
            url: api.addUser,
            method: "post",
            data: this.state.user
        }).then(res => {
            console.log(res)
            if (res.data.isok) {
                alert(res.data.info)
            }
            else {
                alert("不能为空")
            }
        })
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
                    <h3>注册</h3>
                </div>
                <div className="user">
                    <span className="icon iconfont icon-phone tel"></span>
                    <input type="text" placeholder="手机号码"
                        value={this.state.user.tel}
                        onChange={this.change.bind(this, 'tel')}
                    />
                </div>
                <div className="pass">
                    <span className="icon iconfont pas">&#xe60b;</span>
                    <input type="text" placeholder="邮箱"
                        value={this.state.user.name}
                        onChange={this.change.bind(this, 'name')}
                    />
                </div>
                <div className="pass">
                    <span className="icon iconfont icon-yanzhengma email"></span>
                    <input type="text" placeholder="验证码" />
                    <button className="num">验证码</button>
                </div>
                <div className="pass">
                    <span className="icon iconfont pas">&#xe60b;</span>
                    <input type="password" placeholder="密码"
                        value={this.state.user.pass}
                        onChange={this.change.bind(this, 'pass')}
                    />
                </div>
                <div className="reg" onClick={this.reg.bind(this)}>
                    <button>注册</button>
                </div>
            </div>
        )
    }
}