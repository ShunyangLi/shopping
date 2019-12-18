import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './chat.scss'

export default class Chat extends Component {
  config = {
    navigationBarTitleText: '客服'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>这是客服聊天界面</Text>
      </View>
    )
  }

}
