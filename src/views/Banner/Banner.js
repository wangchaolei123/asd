import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';
class Parent extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                            <img
                                src={`https://zos.alipayobjects.com/r`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}
export default withRouter(Parent)