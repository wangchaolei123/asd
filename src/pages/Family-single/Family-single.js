import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import api from '../../common/api'
// import { Link } from 'react-router-dom'
import im1 from '../../assets/images/社区-家政-详细_07.jpg'
export default class Parent extends Component {
    state = {
        data: ""
    }
    componentDidMount() {
        var fid = this.props.match.params.id
        this.$axios({
            url: api.findHomeWorker,
            params: {
                id: fid
            }
        }).then(res => {
            console.log(res)
            this.setState({ data: res.data.data[0] })
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h3>{this.state.data.name}</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
                <div className="fm-header">
                    <img src={this.state.data.img} alt="" />
                    <p>{this.state.data.name}</p>
                    <span className="vip">{this.state.data.vNum}</span>
                    <div className="person">
                        <span>{this.state.data.city}</span>|
                    <span>{this.state.data.age}</span>|
                    <span>{this.state.data.edu}</span>|
                    <span>{this.state.data.experience}</span>
                    </div>
                    <div className="btn">
                        <span className="gz">关注</span>
                        <span className="qa">向TA提问</span>
                    </div>
                    <span className="guan">关注 {this.state.data.readNum}</span>
                    <span className="hp">好评 {this.state.data.likeNum}</span>
                    <span className="pr">￥{this.state.data.price}</span>
                    <span className="icon iconfont logo">&#xe611;</span>
                    <span className="len">距离你 {this.state.data.len}公里</span>
                </div>
                <div className="fm-main">
                    <div className="main">
                        <h4>简介</h4>
                        <div className="line"></div>
                    </div>
                    <div className="gr">
                        <p>资格认证：<span>{this.state.data.qualification}</span></p>
                        <p>服务项目：<span>{this.state.data.type}</span></p>
                        <p>自我评价：<span>{this.state.data.info}</span></p>
                        <p className="mes">
                            {this.state.data.name}毕业于河北师范大学，资深的数学高级教师，曾带领两届高三班.....

                        </p>
                    </div>
                </div>
                <div className="fm-main">
                    <div className="main">
                        <h4>雇主评价</h4>
                        <span className="">写评论</span>
                        <span className="icon iconfont">&#xe661;</span>

                        <div className="line"></div>
                    </div>
                </div>
                <div className="fm-content">
                    <ul>
                        <li>
                            <img src={im1} alt="" />
                            <span className="id">娃娃脸wq</span>
                            <span className="cont">这家水店服务特别好，送水速度快，水喝着也不错，而且经济实惠。。。</span>
                            <span className="time">1小时前</span>
                            <div className="line-1"></div>
                        </li>
                        <li>
                            <img src={im1} alt="" />
                            <span className="id">娃娃脸wq</span>
                            <span className="cont">这家水店服务特别好，送水速度快，水喝着也不错，而且经济实惠。。。</span>
                            <span className="time">1小时前</span>
                            <div className="line-1"></div>
                        </li>   <li>
                            <img src={im1} alt="" />
                            <span className="id">娃娃脸wq</span>
                            <span className="cont">这家水店服务特别好，送水速度快，水喝着也不错，而且经济实惠。。。</span>
                            <span className="time">1小时前</span>
                            <div className="line-1"></div>
                        </li>
                    </ul>
                </div>
                <div className="fm-footer">
                    <button className="fx">分享</button>
                    <button className="lx">与我联系</button>
                </div>
            </div>
        )
    }
}
// age: "1"
// city: "成都"
// edu: "初中"
// experience: "3年"
// id: "1575283615373890886"
// img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3402063479,1936521224&fm=111&gp=0.jpg"
// info: "认真，负责"
// len: "1"
// likeNum: "1"
// name: "may"
// price: "1元/小时"
// qualification: "身份证,母婴护理师证"
// readNum: "1"
// tel: "13828374753"
// type: "保姆,家具保养,保洁,钟点工"
// vNum: "v2"
// year: "3"