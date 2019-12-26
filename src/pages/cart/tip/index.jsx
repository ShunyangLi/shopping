import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import tipIcon from './assets/tip-icon.png'
import './index.scss'

export default class Tip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        '澳洲本地发货',
        '正品保障'
      ]
    }
  }

  render () {
    const { list } = this.state;
    return (
      <View className='cart-tip'>
        {list.map((tip, index) => (
          <View key={index} className='cart-tip__item'>
            <Image
              className='cart-tip__item-img'
              src={tipIcon}
            />
            <Text className='cart-tip__item-txt'>{tip}</Text>
          </View>
        ))}
      </View>
    )
  }
}
