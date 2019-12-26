import Taro, { Component } from '@tarojs/taro'
import {ScrollView, View} from "@tarojs/components";
import { ClShopBar } from "mp-colorui";
import CustomNavBar from "../../component/CustomNavBar";
import Pop from "../../component/popup/pop";
import Spec from "./specific/spec";
import MainImage from "./main/main";
import Base from "./base/base";
import {getWindowHeight} from "../../utils/style";
import './item.scss';


const itemData = {
    image: 'http://www.littlegend.com/static/img/itemImg/%E7%88%B1%E4%BB%96%E7%BE%8E%E9%93%82%E9%87%91%E4%B8%80%E6%AE%B5/main.jpg',
    title: '爱他美铂金一段',
    price: 32.5,
    id: 1
  };

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemID: '',
      visible: false,
      selected: {}
    }
  }

  config = {
    navigationBarTitleText: '商品详情'
  };

  componentWillMount () {
    this.setState({
      itemID: this.$router.params.itemId
    });
    console.log(this.$router.params);
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  clickTabs = (index) => {
    console.log(index);
  };

  clickButtons = (index) => {
    console.log(index);
    this.setState({
      visible: !this.state.visible,
    });
  };

  toggleVisible = () => {
    this.setState({
      visible: !this.state.visible,
    })
  };

  // 选择商品属性
  handleSelect = (selected) => {
    this.setState({
      selected: selected
    });

    console.log(selected);
  };

  render() {

    const popupStyle = process.env.TARO_ENV === 'rn' ?
      { transform: [{ translateY: Taro.pxTransform(-100) }] } :
      { transform: `translateY(${Taro.pxTransform(-100)})` };


    const tabsBorder = [
      {
        icon: 'favor',
        badge: false
      },
      {
        icon: 'cart',
        badge: 99
      }
    ];

    const buttonBorder = [
      {
        text: '加入购物车',
        bgColor: 'white'
      },
      {
        text: '立即购买',
        bgColor: 'red'
      }
    ];

    const data = {
      primaryPicUrl: 'http://www.littlegend.com/static/img/itemImg/%E7%88%B1%E4%BB%96%E7%BE%8E%E9%93%82%E9%87%91%E4%B8%80%E6%AE%B5/main.jpg',
      price: 100
    };

    const items = [
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
    ];
    const height = getWindowHeight(false);
    return (
      <View className='item'>
        {/* 返回导航栏 */}
        <CustomNavBar title='商品详情' url='/pages/index/index' />

        {/* 展示详细的信息 */}
        <ScrollView
          scrollY
          className='item-wrap'
          style={{ height }}
        >
          {/* 主页图片 */}
          <MainImage
            data={items}
          />

          {/* 基础信息 */}
          <Base
            data={itemData}
          />

        </ScrollView>

        {/* 弹窗部分 */}
        <Pop
          visible={this.state.visible}
          onClose={this.toggleVisible}
          compStyle={popupStyle}
        >
          <Spec
            data={data}
            selected={this.state.selected}
            onSelect={this.handleSelect}
          />

        </Pop>

        {/* footer部分 */}
        <ClShopBar
          fix
          border
          safeArea
          tabs={tabsBorder}
          buttons={buttonBorder}
          onClickTab={(index) => {this.clickTabs(index)}}
          onClickButton={(index) => {this.clickButtons(index)}}
        />
      </View>
    )
  }


}
