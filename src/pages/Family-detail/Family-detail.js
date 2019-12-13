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
            url: api.findHomeWorker,
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
                    <h3>月嫂</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
                <div className="water-select">
                    <div className="station">
                        籍贯
                        <span className="icon iconfont">&#xe61f;</span>
                    </div>
                    <div className="area">工资
                    <span className="icon iconfont">&#xe61f;</span>
                    </div>
                    <div className="top">年龄
                    <span className="icon iconfont">&#xe61f;</span>
                    </div>
                </div>
                <ul className="f-detail">
                    {this.state.data.map(item => {
                        return (
                          
                            <li key={item.id}>
                                  <Link to={'/family-single/'+item.id}>
                                <img src={item.img} alt="" />
                                <span className="name">{item.name}</span>
                                <span className="vNum">{item.vNum}</span>
                                <div className="mes">
                                <span className="city">{item.city}</span>|<span>{item.age}</span>|<span>{item.edu}</span>|<span>{item.experience}</span>
                                </div>
                                <span className="info">{item.info}</span>
                               <div className="like">
                               <span className="reNum">关注 {item.readNum}</span>
                                <span className="likeN">喜欢 {item.likeNum}</span>
                               </div>
                                <span className="price">{item.price}</span>
                                </Link>
                            </li>
                          
                        )
                    })
                    }
                </ul>

            </div>
        )

        //         age: "1"
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
    }
}