import Taro, {Component} from '@tarojs/taro';
import { View, Image } from '@tarojs/components'
import './ProductCard.scss'

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {url, price, title, key} = this.props;
    return (
      <View className='card' key={key}>

        <Image className='img' src={url} />
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
