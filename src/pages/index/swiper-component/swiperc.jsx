import Taro, { Component } from '@tarojs/taro'
import {Swiper, SwiperItem, Image} from '@tarojs/components'
import './index.scss'

export default class SwiperCompoent extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {items} = this.props;
    return (
      <Swiper
        indicatorColor='#999'
        className='swiper'
        indicatorActiveColor='#333'
        vertical={false}
        circular
        indicatorDots
        autoplay
      >
        {
          items.map(item => (
            <SwiperItem className='swiper-item' key={item.key}>
              <Image className='swiper-item-img' src={item.url} />
            </SwiperItem>
          ))
        }

      </Swiper>
    )
  }

}
