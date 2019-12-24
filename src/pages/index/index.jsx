import Taro, { Component } from '@tarojs/taro'
import {View, Text, ScrollView} from '@tarojs/components'
import { AtSearchBar, AtNoticebar } from 'taro-ui'
import SwiperCompoent from './swiper/swiperc'
import './index.scss'
import AppNav from "./nav/appnav";
import ProductCard from "../../component/product/ProductCard";
import { getWindowHeight } from '../../utils/style'


// 默认商品数量
// const ITEMSIZE = 20;

const goodsList = [
  {
    image: 'http://www.littlegend.com/static/img/itemImg/%E7%88%B1%E4%BB%96%E7%BE%8E%E9%93%82%E9%87%91%E4%B8%80%E6%AE%B5/main.jpg',
    title: '爱他美铂金一段',
    price: 32.5,
    id: 1
  },
  {
    image: 'http://www.littlegend.com/static/img/itemImg/%E7%88%B1%E4%BB%96%E7%BE%8E%E9%93%82%E9%87%91%E4%B8%80%E6%AE%B5/main.jpg',
    title: '爱他美铂金二段',
    price: 31.5,
    id: 2
  },
  {
    image: 'http://www.littlegend.com/static/img/itemImg/%E7%88%B1%E4%BB%96%E7%BE%8E%E9%93%82%E9%87%91%E4%B8%80%E6%AE%B5/main.jpg',
    title: '爱他美铂金三段',
    price: 30.5,
    id: 3
  },
  {
    image: 'http://www.littlegend.com/static/img/itemImg/%E7%88%B1%E4%BB%96%E7%BE%8E%E9%93%82%E9%87%91%E4%B8%80%E6%AE%B5/main.jpg',
    title: '爱他美铂金四段',
    price: 12.5,
    id: 4
  },
  {
    image: 'http://www.littlegend.com/static/img/itemImg/%E7%88%B1%E4%BB%96%E7%BE%8E%E9%93%82%E9%87%91%E4%B8%80%E6%AE%B5/main.jpg',
    title: '爱他美铂金五段',
    price: 14.5,
    id: 5
  },
  {
    image: 'http://www.littlegend.com/static/img/itemImg/%E7%88%B1%E4%BB%96%E7%BE%8E%E9%93%82%E9%87%91%E4%B8%80%E6%AE%B5/main.jpg',
    title: '爱他美铂金六段',
    price: 31.5,
    id: 6
  },
];

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
      ],
      loading: false
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

  handleLoading = () => {
    console.log("loading");
    this.setState({
      loading: true
    })
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

        <ScrollView
          scrollY
          style={{ height: getWindowHeight() }}
          onScrollToLower={this.handleLoading}
        >
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
            <View className='product-list'>
              {goodsList.map((item, index) => (
                <ProductCard
                  key={index}
                  itemID={item.id}
                  title={item.title}
                  url={item.image}
                  price={item.price}
                />
              ))}
            </View>
        </ScrollView>

        {/* 显示正在加载 */}
          {this.state.loading &&
          <View className='loading'>
            <Text className='loading-txt'>正在加载中...</Text>
          </View>
        }
      </View>
    )
  }
}
