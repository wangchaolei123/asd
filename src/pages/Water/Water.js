import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import api from '../../common/api'
import { Link } from 'react-router-dom'
export default class Parent extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.$axios({
            url: api.findWater,
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
                    <h3>送水到家</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
                <div className="water-select">
                    <div className="station">
                        水站
                        <span className="icon iconfont">&#xe61f;</span>
                    </div>
                    <div className="area">区域
                    <span className="icon iconfont">&#xe61f;</span>
                    </div>
                    <div className="top">智能排序
                    <span className="icon iconfont">&#xe61f;</span>
                    </div>
                </div>
                <div>
                    {this.state.data.map(item => {
                        return (
                            <Link key={item.id} className="water-con" to={'/water-single/' + item.id}>
                                <div>
                                    <div className="water-flex">
                                        <img src={item.img} alt="" />
                                        <div className="water-middle">
                                            <span className="water-name">{item.name}</span>
                                            <span className="water-des">{item.des}</span>
                                            <div className="address">
                                                <span className="icon iconfont t1-t">&#xe611;</span>
                                                <span>{item.address}</span>
                                            </div>
                                        </div>
                                        <div className="water-tel">
                                            <span className="icon iconfont icon-bodadianhua_"></span>
                                            <span>{item.len}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                    }

                </div>

            </div>
        )
    }
}