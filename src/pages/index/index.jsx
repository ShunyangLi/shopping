import Taro, { Component } from '@tarojs/taro'
import {View, Text, Swiper, SwiperItem, Image} from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
// import SwiperCompoent from './swiper-component/swiperc'
import './index.scss'

export default class Index extends Component {

  constructor () {
    super(...arguments);
    this.state = {
      searchValue: '',
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
    }, 100)
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
      <View className='index'>
        {/* 搜索框 */}
        <AtSearchBar
          value={this.state.searchValue}
          onChange={this.onChange.bind(this)}
          onActionClick={this.handleSearch.bind(this)}
          onBlur={this.handleClear.bind(this)}
        />

        {/*<SwiperCompoent items={this.state.items} />*/}
        {/* 首页图片滑动 */}
        <Swiper
          indicatorColor='#999'
          className='home-banner__swiper'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem className='home-banner__swiper-item'>
            <Image className='home-banner__swiper-item-img' src='http://littlegend.com/static/img/example3.jpg' />
          </SwiperItem>
          <SwiperItem className='home-banner__swiper-item'>
            <Image className='home-banner__swiper-item-img' src='http://littlegend.com/static/img/example2.jpg' />
          </SwiperItem>
          <SwiperItem className='home-banner__swiper-item'>
            <Image className='home-banner__swiper-item-img' src='http://littlegend.com/static/img/example3.jpg' />
          </SwiperItem>
        </Swiper>

        <Text>主页面</Text>
      </View>
    )
  }
}
