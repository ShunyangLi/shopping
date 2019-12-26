import Taro, { Component } from '@tarojs/taro'
import {View, Text} from "@tarojs/components";
import './base.scss'

// 商品的简介还有价格
export default class Base extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;

    return (
      <View className='item-info-base'>
        {/* 商品名字 以及好评率 */}
        <View className='item-info-base__header'>
          <View className='item-info-base__header-wrap'>
            <Text className='item-info-base__header-name'>{data.title}</Text>
          </View>
          <View className='item-info-base__header-star'>
            <Text className='item-info-base__header-star-txt'>
              99%
            </Text>
            <Text className='item-info-base__header-star-link'>{'好评率>'}</Text>
          </View>
        </View>

        {/* 价格 */}
        <View className='item-info-base__price'>
          <Text className='item-info-base__price-symbol'>$</Text>
          <Text className='item-info-base__price-txt'>
            {data.price}
          </Text>
        </View>


      </View>
    )
  }

}
