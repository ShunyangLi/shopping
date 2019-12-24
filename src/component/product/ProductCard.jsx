import Taro, {Component} from '@tarojs/taro';
import {View, Image} from '@tarojs/components';
import './ProductCard.scss'

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {src, price, title} = this.props;
    return (
      <View className='card'>
        <Image src={src} className='img' />

        <View className='body'>
          {title}
          <View className='price'>
            {price}
          </View>
        </View>
      </View>
    )
  }

}
