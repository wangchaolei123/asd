import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import { Carousel, WingBlank } from 'antd-mobile';
import api from '../../common/api'
import { Link } from 'react-router-dom'
import im1 from '../../assets/images/family-1_03.jpg'
export default class Parent extends Component {
    state = {
        data: [],
        imgHeight: 200,
        open: false,
        image: []

    }
    componentDidMount() {
        // simulate img loading
        this.$axios({
            url: api.homeBanner,
            method: "get",
            data: this.state.data
        }).then(res => {
            // console.log(res)
            this.setState({
                data: res.data.data
            })
        })
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        // this.$axios({
        //     url: api.teacherTop,
        //     method: "get"
        // }).then(res => {
        //     console.log(res)
        //     this.setState({
        //         image: res.data.data
        //     })
        // })
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h3>家政</h3>
                    <span className="icon iconfont icon-yonghu user-logo"></span>
                </div>
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
                <div className="teacher-f1">
                    <div>
                        <div className="fm">
                            <span className="icon iconfont">&#xe62c;</span>
                        </div>
                        <Link to="/teacher">钟点工</Link></div>
                    <div>
                        <div className="wat">
                            <span className="icon iconfont">&#xe613;</span>
                        </div>
                        <Link to="/water">保姆</Link></div>
                    <div>
                        <div className="re">
                            <span className="icon iconfont">&#xe670;</span>
                        </div>
                        <Link to="/family-detail">月嫂</Link></div>
                    <div>
                        <div className="jz">
                            <span className="icon iconfont">&#xe662;</span>
                        </div><Link to="/family">专业保洁</Link></div>
                </div>
                <div className="teacher-f1">
                    <div>
                        <div className="fm">
                            <span className="icon iconfont">&#xe601;</span>
                        </div>
                        <Link to="/teacher">家电清洗</Link></div>
                    <div>
                        <div className="wat">
                            <span className="icon iconfont">&#xe63d;</span>
                        </div>
                        <Link to="/water">家居保养</Link></div>
                    <div>
                        <div className="re">
                            <span className="icon iconfont">&#xe636;</span>
                        </div>
                        <Link to="/repair">新居开荒</Link></div>
                    <div>
                        <div className="jz">
                            <span className="icon iconfont">&#xe662;</span>
                        </div><Link to="/family">更多</Link></div>
                </div>
                <div className="family">
                    <div className="fm-footer">
                      <div>  <span>临时小时工预约点这里</span></div>
                      <div>  <img src={im1} alt="" /></div>
                    </div>
                    <div className="fm-footer">
                      <div>  <span>临时小时工预约点这里</span></div>
                      <div>  <img src={im1} alt="" /></div>
                    </div>
                </div>
            </div>
        )
    }
}