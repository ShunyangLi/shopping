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
         <View className='at-row at-row__align--center'>
           <View className='at-col'>
             <ClIcon iconName='pay' />
             <View className='at-col'>
               待付款
             </View>
           </View>
           <View className='at-col'>
             <ClIcon iconName='send icons' />
             <View className='at-col'>
             待收货
             </View>
           </View>
           <View className='at-col'>
             <ClIcon iconName='deliver icons' />
             <View className='at-col'>
             待发货
             </View>
           </View>
           <View className='at-col'>
             <ClIcon iconName='recharge icons' />
             <View className='at-col'>
             售后
             </View>
           </View>
         </View>
       </View>

        <View style='margin-top: 2%'>
          {/* 操作按钮 */}
          <ClMenuList list={this.state.menus} onClick={this.clickMenu.bind(this)} />
        </View>
      </View>
    )
  }
}
