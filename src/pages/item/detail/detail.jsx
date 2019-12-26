import Taro, { Component } from '@tarojs/taro';
import {Image, View} from "@tarojs/components";
import './detail.scss';

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {data} = this.props;

    return (
      <View className='item-detail'>
        {data.map((item, index) => (
          <Image
            mode='aspectFit'
            className='imageDetails'
            key={index}
            src={item.url}
          />
        ))}
      </View>
    )
  }

}
