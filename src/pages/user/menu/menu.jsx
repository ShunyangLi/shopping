import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import { ClIcon, ClMenuList} from "mp-colorui";
import './menu.scss'


export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          title: "个人资料",
          arrow: true,
          url: ''
        },
        {
          title: "全部订单",
          arrow: true,
          url: ''
        },
        {
          title: "地址管理",
          arrow: true,
          url: '/pages/address/address'
        },
        {
          title: "我的足迹",
          arrow: true,
          url: ''
        },
        {
          title: "意见反馈",
          arrow: true,
          url: ''
        },
        {
          title: "推广二维码",
          arrow: true,
          url: ''
        }
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  clickMenu = (index) => {
    let url = this.state.menus[index].url;
    Taro.navigateTo({
      url: url
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <View>
       <View className='container'>
         <View className='button'>
           <ClIcon iconName='pay' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>待付款</p>
         </View>
         <View className='button'>
           <ClIcon iconName='send icons' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>待收货</p>
         </View>

         <View className='button'>
           <ClIcon iconName='deliver icons' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>待发货</p>
         </View>

         <View className='button'>
           <ClIcon iconName='comment icons' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>待评价</p>
         </View>

         <View className='button'>
           <ClIcon iconName='question icons' />
           {/* eslint-disable-next-line react/forbid-elements */}
           <p>售后</p>
         </View>
       </View>

        {/* 操作按钮 */}
        <ClMenuList list={this.state.menus} onClick={this.clickMenu.bind(this)} />

      </View>
    )
  }
}
