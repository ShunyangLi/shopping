import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import { AtFloatLayout } from "taro-ui"
import { ClShopBar } from "mp-colorui";
import CustomNavBar from "../../component/CustomNavBar";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemID: '',
      show: false
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
      show: true
    })
  };

  render() {
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

    const {itemID} = this.state;
    return (
      <View>
        {/* 返回导航栏 */}
        <CustomNavBar title='商品详情' url='/pages/index/index' />

        {/* 展示详细的信息 */}
        <View style='position:absolute'>
          {itemID}
        </View>

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
