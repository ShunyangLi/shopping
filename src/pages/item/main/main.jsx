import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './main.scss'

export default class MainImage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {data} = this.props;
    return(
      <View className='item-gallery'>
        <Swiper
          className='item-gallery__swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          autoplay
        >
          {
            data.map((item, index) => (
              <SwiperItem className='item-gallery__swiper-item' key={index}>
                <Image className='item-gallery__swiper-item-img' src={item.url} />
              </SwiperItem>
            ))
          }
        </Swiper>
      </View>
    )
  }

}
