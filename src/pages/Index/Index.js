import React, { Component } from 'react'
import '../Index/index.styl'
import { Carousel, WingBlank, Drawer, List, NavBar, Icon } from 'antd-mobile';
import { Link, NavLink } from 'react-router-dom'
import api from '../../common/api'

// import Teacher from '../Teacher/Teacher'
// import axios from 'axios'


export default class Parent extends Component {
    state = {
        data: [],
        imgHeight: 200,
        open: false,
    }
    componentDidMount() {
        // simulate img loading
        this.$axios({
            url: api.banner,
            method: "get",

        }).then(res => {
            console.log(res)
            this.setState({
                data: res.data.data
            })
            console.log(this.state.data)
        })
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    exit() {
        this.$axios({
            url: api.exit,
        }).then(res => {
            alert(res.data.info)
        })
    }
    render() {
        // fix in codepen
        const sidebar = (<List>
            <div className="hidden">
                <div className="index-hidden">
                    <span className="hidden-top"></span>

                    <span className="hidden-name">
                        用户
               </span>
                </div>
                <ul>
                    <li>
                        <NavLink to="/teacher">
                            <span className="icon iconfont">&#xe601;</span>
                            找家教
    </NavLink>
                    </li>
                    <li><NavLink to="/techer"><span
                        //  activeClassname="select" 
                        className="icon iconfont" >&#xe63d;</span>送水到家</NavLink></li>
                    <li><NavLink to="/repair"><span
                        // activeClassname="select" 
                        className="icon iconfont">&#xe636;</span>维修服务</NavLink></li>
                    <li><NavLink to="/family"><span
                        // activeClassname="select" 
                        className="icon iconfont">&#xe662;</span>家政服务</NavLink></li>
                    <li><NavLink to="/community"><span
                        // activeClassName="select"
                        className="icon iconfont icon-shequ"></span>社区互动</NavLink></li>
                    <li><NavLink to="/water"><span
                        // activeClassname="select"
                        className="icon iconfont">&#xe70b;</span>消息中心</NavLink></li>
                    <li><NavLink to="/collection"><span
                        //  activeClassname="select" 
                        className="icon iconfont">&#xe614;</span>我的收藏</NavLink></li>
                    <li><NavLink to="/water"><span
                        // activeClassname="select"
                        className="icon iconfont icon-wodefabu"></span>我的发布</NavLink></li>
                    <li><NavLink to="/password"><span
                        //  activeClassname="select" 
                        className="icon iconfont" >&#xe622;</span>修改密码</NavLink></li>
                    <li><NavLink to="/login"><span
                        // activeClassname="select"
                        className="icon iconfont" onClick={() => this.exit()}>&#xe6ba;</span>退出登录</NavLink></li>
                </ul>
            </div>
        </List>)
        return (
            <div>
                <div>
                    <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange} >龙山家园</NavBar>
                    <Drawer
                        className="my-drawer"
                        style={{ minHeight: document.documentElement.clientHeight }}
                        enableDragHandle
                        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                        sidebar={sidebar}
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                    >
                        <div className="search">
                            <div className="s1">
                                <span className="icon iconfont icon-tubiao- s2">
                                </span>
                                <input type="text" placeholder="搜索" className="ss" />
                            </div>
                            <div>
                                <button className="fb">我要发布</button>
                            </div>
                        </div>
                        <WingBlank>
                            <Carousel
                                autoplay={false}
                                infinite
                                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                afterChange={index => console.log('slide to', index)}
                                className="img"
                            >
                                {this.state.data.map(val => (
                                    <img
                                        src={val.img}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                        key={val.id}
                                    />
                                ))}
                            </Carousel>
                        </WingBlank>
                        <div className="weather">
                            <div className="wea">
                                <span className="icon iconfont icon-icon- tq"></span>
                                <span className="rain">
                                    多云/小雨
                    </span>
                                <span >
                                    27/30C
                </span>
                                <span className="feng">
                                    3-4级/4-5级风
                    </span>
                            </div>
                            <div className="date">
                                <span>
                                    星期一
                       </span>
                                <span>
                                    18:00
                       </span>
                            </div>
                        </div>
                        <div className="index-footer">
                            <div className="index-f1">
                                <div>
                                    <div className="fm">
                                        <span className="icon iconfont">&#xe601;</span>
                                    </div>
                                    <Link to="/teacher">找家教</Link></div>
                                <div>
                                    <div className="wat">
                                        <span className="icon iconfont">&#xe63d;</span>
                                    </div>
                                    <Link to="/water">送水到家</Link></div>
                                <div>
                                    <div className="re">
                                        <span className="icon iconfont">&#xe636;</span>
                                    </div>
                                    <Link to="/repair">维修服务</Link></div>
                            </div>
                            <div className="index-f2">
                                <div>
                                    <div className="jz">
                                        <span className="icon iconfont">&#xe662;</span>
                                    </div><Link to="/family">家政</Link></div>
                                <div>
                                    <div className="sq">
                                        <span className="icon iconfont icon-shequ"></span>
                                    </div><Link to="community">社区互动</Link></div>
                                <div>
                                    <div className="gd">
                                        <span className="icon iconfont">&#xe618;</span>
                                    </div>
                                    <Link to="/more">更多服务</Link></div>
                            </div>
                        </div>


                    </Drawer>
                </div>

            </div>
        )
    }
}
