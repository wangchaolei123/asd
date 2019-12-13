import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import api from '../../common/api'
import Rate from '../../views/Rate/Rate'
import moment from 'moment';
import im1 from '../../assets/images/社区-家政-详细_07.jpg'
import { Link } from 'react-router-dom'
export default class Parent extends Component {
    state = {
        data: [],
        user: [],
    }

    componentDidMount() {
        // console.log(1)
        var rid = this.props.match.params.id
        console.log(rid)
        this.$axios({
            url: api.findRepair,
            params: {
                id: rid
            }
        }).then(res => {

            this.setState({ data: res.data.data[0] })

        })
        this.$axios({
            url: api.findRepairComment,
            params: {
                repairId: rid
            }
        }).then(res => {
            console.log(res)
            this.setState({ user: res.data.data })
        })
    }
    render() {
        // console.log("aaa")
        var score = this.state.data.score
        console.log(score)
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h3>商家详情</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
                <div className="res-header">
                    <p>{this.state.data.name}</p>
                    <Rate number={5} def={this.state.data.score}></Rate>
                </div>
                <div className="res-main">
                    <span className="icon iconfont logo">&#xe611;</span>
                    <span className="len">距你{this.state.data.len}</span>
                    <span className="add">{this.state.data.address}</span>
                    <span className="time">营业时间：09:00-18:00</span>
                    <span className="gz">关注</span>
                    <span className="qa">向TA提问</span>
                    <span className="guan">关注{this.state.data.readNum}</span>
                    <span className="good">好评{this.state.data.likeNum}</span>
                </div>
                <div className="ws-xx">
                    <h4>商家信息</h4>
                </div>
                <div className="ws-des">
                    <p>
                        {this.state.data.info}
                    </p>
                </div>
                <div className="fm-main">
                    <div className="main">
                        <h4>TA们都在说</h4>
                        <span className="">
                            <Link to={'/repair-content/' + this.state.data.id}>
                                写评论
</Link>

                        </span>
                        <span className="icon iconfont">&#xe661;</span>

                        <div className="line"></div>
                    </div>
                </div>
                <div className="fm-content">
                    <ul>
                        {
                            this.state.user.map(item => {
                                return (
                                    <li key={item.id}>
                                        <img src={im1} alt="" />
                                        <span className="id">{item.name}</span>
                                        <span className="cont">{item.content}</span>
                                        <span className="time">{
                                            moment(parseInt(item.time)).format("YYYY-MM-DD HH:mm:ss")
                                        }</span>
                                        <span className="line-1"></span>
                                    </li>
                                )
                            })
                        }
                        {/* <li>
                            <img src={im1} alt="" />
                            <span className="id">娃娃脸wq</span>
                            <span className="cont">这家水店服务特别好，送水速度快，水喝着也不错，而且经济实惠。。。</span>
                            <span className="time">1小时前</span>
                            <div className="line-1"></div>
                        </li> */}

                    </ul>
                </div>
                <div className="fm-footer">
                    <button className="fx">分享</button>
                    <button className="lx">与我联系</button>
                </div>
                {/* {
                    this.state.user.map(item => {
                        return (
                            <li key={item.id}>
                                <p>{item.name}</p>

                            </li>
                        )
                    })
                } */}
                {/* ava: null
content: "123"
id: "1576118126344590333"
name: "crow"
repairId: "1563523233641126966"
time: "1576118128627"
userId: "1575963449293128816" */}
            </div>
        )
    }
    //     address: "小李村11"
    // id: "1563523233641126966"
    // info: "欢迎光临"
    // len: "30m"
    // likeNum: "300"
    // name: "维修站22"
    // readNum: "500"
    // score: "5"
    // tel: "1119"
    // type: "手机、电脑、DIV"
}