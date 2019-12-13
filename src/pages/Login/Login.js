import React, { Component } from 'react'
// import l from '../../assets'
// import login from '../Login/login.styl'
// import from '../Login/login.styl'
// import Back from '../../views/Back/Back'
// import qs from 'qs'
// import axios from 'axios'
import api from '../../common/api'
import { Link } from 'react-router-dom'
import '../Login/login.styl'
export default class Parent extends Component {
    state = {
        user: {
            name: "",
            pass: "",
            type: "2"
        }
    }
    login() {
        // console.log(this.state.user)
        
        this.$axios({
            url: api.login,
            method: "post",
            data: this.state.user
        }).then(res => {
            if (res.data.isok) {
                localStorage.setItem("username", this.state.user.name)
                localStorage.setItem("userpass",this.state.user.pass)
                // localStorage.setItem("type", this.user.type);
                this.props.history.push("/index")
            } else {
                alert("错误")
            }
            console.log(res)
        })
    }
    componentDidMount() {

    }
    change(props, e) {
        let user = this.state.user
        user[props] = e.target.value;
        this.setState({
            user
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <span className="icon iconfont ">&#xe67a;</span>
                    <h3 >登录</h3>
                </div>
                <div className="user">
                    <span className="icon iconfont tel">&#xe64d;</span>
                    <input type="text" placeholder="邮箱/手机号"
                        value={this.state.user.name}
                        onChange={this.change.bind(this, 'name')} />
                </div>
                <div className="pass">
                    <span className="icon iconfont pas">&#xe60b;</span>
                    <input type="password" placeholder="密码"
                        value={this.state.user.pass}
                        onChange={this.change.bind(this, 'pass')} />
                </div>
                <div className="btn">
                    <button onClick={this.login.bind(this)}>登录</button>
                </div>
                <div className="reg">
                    <Link to={"/register"}>注册</Link>
                </div>
                <div className="or">
                    <div className="line"></div>
                    <p>或者</p>
                    <div className="line"></div>
                </div>
                <div className="fast">
                    <p>社交账号快速登录</p>
                </div>
                <div className="other">
                    <div>   <span className="icon iconfont">&#xe667;</span></div>
                    <div> <span className="icon iconfont">&#xe620;</span></div>
                    <div>
                        <span className="icon iconfont icon-weibo"></span>
                    </div>
                </div>
            </div>
        )
    }
}