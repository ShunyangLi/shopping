import Taro, {Component} from '@tarojs/taro';
import { View, Image } from '@tarojs/components'
import './ProductCard.scss'

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  itemDetails = (id) => {
    Taro.navigateTo({
      url: `/pages/item/item?itemId=${id}`
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    const {url, price, title, itemID} = this.props;
    return (
      <View
        className='card'
        key={itemID}
        onClick={this.itemDetails.bind(this, itemID)}
      >
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
