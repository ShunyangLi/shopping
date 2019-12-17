import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './user.scss'

export default class User extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>这是用户中心</Text>
      </View>
    )
  }

}
