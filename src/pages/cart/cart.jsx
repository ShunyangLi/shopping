import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './cart.scss'

export default class Cart extends Component {
  config = {
    navigationBarTitleText: '购物车'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>这是购物车页面</Text>
      </View>
    )
  }

}
