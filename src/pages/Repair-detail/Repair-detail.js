import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import api from '../../common/api'
import Rate from '../../views/Rate/Rate'
import { Link } from 'react-router-dom'
export default class Parent extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.$axios({
            url: api.findRepair,
            method: "get"
        }).then(res => {
            console.log(res)
            this.setState({ data: res.data.data })
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h3>商家列表</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
                <div className="water-select">
                    <div className="station">
                        手机维修
                        <span className="icon iconfont">&#xe61f;</span>
                    </div>
                    <div className="area">区域
                    <span className="icon iconfont">&#xe61f;</span>
                    </div>
                    <div className="top">智能排序
                    <span className="icon iconfont">&#xe61f;</span>
                    </div>
                </div>
                <ul className="re-detail">
                    {
                        this.state.data.map(item => {
                            return (

                                <li key={item.id}>
                                    <Link to={'/repair-single/' + item.id}>
                                        <span className="name"> {item.name}</span>
                                        <Rate number={5} def={item.score} className="score"></Rate>
                                        <span className="type">{item.type}</span>
                                        <span className="icon iconfont logo">&#xe611;</span>
                                        <span className="address">{item.address}</span>
                                        <span className="icon iconfont tel">&#xe612;</span>
                                        <span className="len">距离：{item.len}</span>
                                    </Link>  </li>
                            )
                        })}
                </ul>
            </div>
        )
    }
}
// address: "小李村11"
// id: "1563523233641126966"
// info: "欢迎光临"
// len: "30m"
// likeNum: "300"
// name: "维修站22"
// readNum: "500"
// score: "5"
// tel: "1119"
// type: "手机、电脑、DIV"