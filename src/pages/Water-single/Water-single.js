import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import api from '../../common/api'
// import { Link } from 'react-router-dom'
import Rate from '../../views/Rate/Rate'
import '../Water-single/water-single.styl'
import moment from 'moment';
import { Link } from 'react-router-dom'
import im1 from '../../assets/images/社区-家政-详细_07.jpg'
// import { TextareaItem } from 'antd-mobile'
export default class Parent extends Component {
    state = {
        data: "",
        // waterId: "",
        user: [],
        // time: []
    }
    componentDidMount() {
        var wid = this.props.match.params.id;
        this.$axios({
            url: api.findWater,
            params: {
                id: wid
            }
        }).then(res => {
            // console.log(res)
            this.setState({ data: res.data.data[0] })
        })
        this.$axios({
            url: api.findComment,
            params: {
                waterId: wid
            }
        }).then(res => {

            this.setState({
                user: res.data.data

            })
            // var len = this.this.state.user.data.length
            // console.log()
            // console.log(moment("20130101", "YYYYMMDD").fromNow())
            console.log(moment(1999992143123).format("YYYY-MM-DD HH:mm:ss"))
        })
    }


    render() {
        // var time=this.state.user.time
        // function(time){
        //         var date = new Date(time * 1000);
        //         return date.getFullYear() + "-" + fixZero(date.getMonth() + 1, 2) + "-" + fixZero(date.getDate(), 2) + " " + fixZero(date.getHours(), 2) + ":" + fixZero(date.getMinutes(), 2) + ":" + fixZero(date.getSeconds(), 2);
        //         function fixZero(num, length) {
        //             var str = "" + num;
        //             var len = str.length;
        //             var s = "";
        //             for (var i = length; i-- > len;) {
        //                 s += "0";
        //             }
        //             return s + str;
        //         }
        //     }

        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h3>详情</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
                {/* <p>{data.name}</p> */}
                <div className="ws-header">
                    <img src={this.state.data.img} alt="" />
                    <p className="name">{this.state.data.name}</p>
                    <Rate number={5} def={this.state.data.score} className="score"></Rate>
                    <span className="count">月销：{this.state.data.count}</span>
                    <span className="price">￥{this.state.data.price}</span>
                    <span className="like">{this.state.data.likeNum}</span>
                    <span className="read">浏览数:{this.state.data.readNum}</span>
                </div>
                <div className="ws-middle">
                    <span className="icon iconfont icon-location"></span>
                    <span className="len">{this.state.data.len}</span>
                    <span className="add">{this.state.data.address}</span>
                    <span className="s-line">|</span>
                    <span className="icon iconfont icon-bodadianhua_ tell"></span>
                </div>
                <div className="ws-xx">
                    <h4>商家信息</h4>
                </div>
                <div className="ws-des">
                    <p>
                        {this.state.data.des}
                    </p>
                </div>
                <div className="ws-xx">
                    <h4>TA们都在说</h4>
                    <span className="" >
                        <Link to={'/water-content/' + this.state.data.id}>
                            写评论
                        </Link>

                    </span>
                    <span className="icon iconfont">&#xe661;</span>

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
                                        <span className="time">  {
                                            moment(parseInt(item.time)).format("YYYY-MM-DD HH:mm:ss")
                                        }</span>
                                        {/* moment({item.time}).format("YYYY-MM-DD HH:mm:ss") */}
                                        {/* new Date({item.time}).toLocaleString() */}
                                        {/* moment("20130101", "YYYYMMDD").fromNow(); */}

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

            </div>
        )

    }
}
// address: "上海"
// count: "321"
// des: "用一份良心，送一份纯净，农夫山泉老百姓最放心的桶装水"
// id: "1575369745761642616"
// img: "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4218329830,3373895598&fm=26&gp=0.jpg"
// len: "321米"
// likeNum: "321"
// name: "农夫山泉"
// price: "321"
// readNum: "132"
// score: "5"
// tel: "321"