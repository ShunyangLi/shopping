import Taro, { Component } from '@tarojs/taro';
import {View, Image, Text} from "@tarojs/components";
import { AtInputNumber } from 'taro-ui';
import './item.scss';
import CheckboxItem from '../../../component/checkbox';

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          type: '三罐包邮',
          title: '爱他美铂金一段',
          totalPrice: 100,
          num: 1,
          checked: false,
          canCheck: true,
          id: 1,
          image: 'http://www.littlegend.com/static/img/itemImg/%E7%88%B1%E4%BB%96%E7%BE%8E%E9%93%82%E9%87%91%E4%B8%80%E6%AE%B5/main.jpg'
        }
      ]
    }
  }


  render() {
    return (
      <View className='cart-list'>
        {this.state.list.map(item => (
          <View
            key={item.id}
            className='cart-list__item'
          >
            {/* TODO need to fix */}
            <CheckboxItem
              checked={item.checked}
              // onClick={this.handleUpdateCheck.bind(this, item)}
            />

            {/* 图片 */}
            <Image
              className='cart-list__item-img'
              src={item.image}
            />

            {/* 内容 */}
            <View className='cart-list__item-info'>
              <View className='cart-list__item-title'>
                <Text className='cart-list__item-title-name' numberOfLines={1}>
                  {item.title}
                </Text>
              </View>

              {/* item type */}
              <View className='cart-list__item-spec'>
                <Text className='cart-list__item-spec-txt'>
                  {item.type}
                </Text>
              </View>

              {/* price 价格 */}
              <View className='cart-list__item-wrap'>
                <Text className='cart-list__item-price'>
                  ${item.totalPrice}
                </Text>
                <View className='cart-list__item-num'>
                  <AtInputNumber
                    value={item.num}
                    min={1}
                    max={10}
                    step={1}
                    // onChange={this.handleUpdate.bind(this, item)}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    )
  }

}
