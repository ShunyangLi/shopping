import Taro, { Component } from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import { AtSearchBar, AtNoticebar } from 'taro-ui'
import SwiperCompoent from './swiper-component/swiperc'
import './index.scss'
import AppNav from "./nav/appnav";

export default class Index extends Component {

  constructor () {
    super(...arguments);
    this.state = {
      searchValue: '',
      items: [
        {
          key: '1',
          url: 'http://littlegend.com/static/img/example3.jpg'
        },
        {
          key: '2',
          url: 'http://littlegend.com/static/img/example2.jpg'
        },
        {
          key: '3',
          url: 'http://littlegend.com/static/img/example1.jpg'
        }
      ]
    };
  }

  config = {
    navigationBarTitleText: '小传奇购物平台'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 下拉刷新页面
   */
  onPullDownRefresh() {
    Taro.startPullDownRefresh().then(res => {
      console.log(res);
    });

    // 100ms 之后停止刷新
    setTimeout(() => {
      window.location.reload();
      Taro.stopPullDownRefresh();
    }, 0);
  }

  /**
   * 搜索的内容
   * @param value search value
   */
  onChange (value) {
    this.setState({
      searchValue: value
    })
  }

  /**
   * 处理search的button
   * 调用API查找相对应的数据
   * 然后转跳网页
   */
  handleSearch = () => {
    console.log(this.state.searchValue);
  };

  /**
   * 失去焦点时清除搜索的数据
   */
  handleClear = () => {
    this.setState({
      searchValue: ''
    });
  };

  render () {
    return (
      <View>
        {/* 搜索框 */}
        <AtSearchBar
          fixed
          value={this.state.searchValue}
          onChange={this.onChange.bind(this)}
          onActionClick={this.handleSearch.bind(this)}
          onBlur={this.handleClear.bind(this)}
        />

        {/* 首页图片滑动 */}
        <SwiperCompoent items={this.state.items} />

        {/* 消息通知 */}
        <AtNoticebar
          close
          marquee
          single
          icon='volume-plus'
        >
          所有商品均有澳洲本地发货。保证澳洲本地原装正品。
        </AtNoticebar>


        {/* 分类 */}
        <AppNav />

        {/* 商品 */}


        <Text>主页面</Text>
      </View>
    )
  }
}
