import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import '../Register/register.styl'
import { Carousel, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom'
// import { Link, NavLink } from 'react-router-dom'
import api from '../../common/api'
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
            url: api.teacherBanner,
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
        this.$axios({
            url: api.teacherTop,
            method: "get"
        }).then(res => {
            console.log(res)
            this.setState({
                image: res.data.data
            })
        })
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
                    <h3>找家教</h3>
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
                <div className="teacher-middle">
                    <div className="teacher-m1">
                        <span class="icon iconfont t1-t">&#xe611;</span>
                        <span className="t1-t1">周边老师</span>
                        <span className="t1-t2">发现身边好老师</span>
                    </div>
                    <div className="teacher-m2">
                        <span class="icon iconfont t2-t1">&#xe611;</span>
                        <span className="t2-t2">我要提问</span>
                        <span className="t2-t3">难题名师帮你解</span>
                    </div>
                </div>
                <div className="teacher-f1">
                    <div>
                        <div className="fm">
                            <span className="icon iconfont">&#xe601;</span>
                        </div>
                        <Link to="/teacher">小学</Link></div>
                    <div>
                        <div className="wat">
                            <span className="icon iconfont">&#xe63d;</span>
                        </div>
                        <Link to="/water">初中</Link></div>
                    <div>
                        <div className="re">
                            <span className="icon iconfont">&#xe636;</span>
                        </div>
                        <Link to="/repair">高中</Link></div>
                    <div>
                        <div className="jz">
                            <span className="icon iconfont">&#xe662;</span>
                        </div><Link to="/family">兴趣</Link></div>
                </div>
                <div className="or">
                    <div className="line"></div>
                    <h3>top排行榜</h3>
                    <div className="line"></div>
                </div>
                <div className="teacher-footer">
                    {this.state.image.map(item => {
                        return (
                            <div  key={item.id} className="teacher-top">
                                <div >
                                    <img src={item.img} className="img1" alt="" />
                                    <img src={item.img} alt="" className="img2" />
                                    <p>{item.num}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}