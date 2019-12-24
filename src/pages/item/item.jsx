import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import { ClShopBar } from "mp-colorui";
import CustomNavBar from "../../component/CustomNavBar";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemID: ''
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

    let {itemID} = this.state;
    return (
      <View>
        {/* 返回导航栏 */}
        <CustomNavBar title='商品详情' url='/pages/index/index' />
        <View>
          {itemID}
        </View>

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
