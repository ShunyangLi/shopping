import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import './appnav.scss'

export default class AppNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          icon: 'http://www.littlegend.com/static/img/orange.png',
          text: '母婴产品'
        },
        {
          icon: 'http://www.littlegend.com/static/img/pink.png',
          text: '营养保健'
        },
        {
          icon: 'http://www.littlegend.com/static/img/green.png',
          text: '美妆产品'
        },
        {
          icon: 'http://www.littlegend.com/static/img/yellow.png',
          text: '其他产品'
        }
      ]
    }
  }

  render() {
    return (
      <View className='app-nav'>
        <View className='app-nav-list'>
          {this.state.list.map((e, index) => (
            <View key={index} className='app-nav-list-item'>
              <View className='img'>
                <Image
                  src={e.icon}
                  mode='aspectFill'
                  style='width: 100%;height: 100%;'
                />
              </View>
              <View className='font20 pt10'>{e.text}</View>
            </View>
          ))}
        </View>
      </View>
    )
  }


}
