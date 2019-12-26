import Taro, { Component } from '@tarojs/taro'
import {ScrollView, View} from "@tarojs/components";
import { ClShopBar } from "mp-colorui";
import CustomNavBar from "../../component/CustomNavBar";
import Pop from "../../component/popup/pop";
import {getWindowHeight} from "../../utils/style";
import './item.scss';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemID: '',
      visible: false
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
      selected: {}
    })
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

    const {itemID} = this.state;
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
          {itemID}

        </ScrollView>

        {/* 弹窗部分 */}
        <Pop
          visible={this.state.visible}
          onClose={this.toggleVisible}
          compStyle={popupStyle}
        >
          <View>
            Hello world
          </View>
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
