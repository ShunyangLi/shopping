import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import { AtDivider, AtList, AtListItem, AtIcon } from "taro-ui"
import './menu.scss'


export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleAddress = () => {
    Taro.navigateTo({
      url: '/pages/address/address'
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <View>
        <AtDivider content='我的订单' fontColor='#ed3f14' />

       <View className='container'>
         <View className='button'>
           <AtIcon value='credit-card icons' prefixClass='fa' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>待付款</p>
         </View>
         <View className='button'>
           <AtIcon value='fal fa-box icons' prefixClass='fa' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>待收货</p>
         </View>

         <View className='button'>
           <AtIcon value='fal fa-truck icons' prefixClass='fa' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>待发货</p>
         </View>

         <View className='button'>
           <AtIcon value='fal fa-comment icons' prefixClass='fa' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>待评价</p>
         </View>

         <View className='button'>
           <AtIcon value='fal fa-hands icons' prefixClass='fa' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>售后/退款</p>
         </View>
       </View>

      <AtList>
        <AtListItem title='个人资料' arrow='right' />
        <AtListItem title='全部订单' arrow='right' />
        <AtListItem title='地址管理' arrow='right' onClick={this.handleAddress} />
        <AtListItem title='我的足迹' arrow='right' />
        <AtListItem title='意见反馈' arrow='right' />
        <AtListItem title='推广二维码' arrow='right' />
      </AtList>
      </View>
    )
  }
}
