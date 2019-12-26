import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import Empty from "./empty";
import './cart.scss';
import {getWindowHeight} from "../../utils/style";
import Tip from "./tip";
import Items from "./items/item";


export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    }
  }

  config = {
    navigationBarTitleText: '购物车'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 如果没有login，转跳到login界面
  toLogin = () => {
    Taro.navigateTo({
      url: '/pages/login/login'
    }).then(res => {
      console.log(res);
    });
  };

  render () {

    if (!this.state.login) {
      return (
        <View className='cart cart--not-login'>
          <Empty text='未登陆' />
          <View className='cart__login'>
            <AtButton
              type='primary'
              onClick={this.toLogin}
              customStyle={{
                background: '#b59f7b',
                borderRadius: Taro.pxTransform(4),
              }}
            >
              登陆
            </AtButton>
          </View>
        </View>
      )
    }

    return (
      // 物品列表
      <View className='cart'>
        <ScrollView
          scrollY
          className='cart__wrap'
          style={{ height: getWindowHeight() }}
        >
          {/* 标签 */}
          <Tip />

          {/* 物品页面 */}
          <Items />

        </ScrollView>
        <Text>这是购物车页面</Text>
      </View>
    )
  }

}
