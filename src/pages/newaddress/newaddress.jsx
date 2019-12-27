import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import { ClSelect, ClInput, ClShopBar } from "mp-colorui";
import './newaddress.scss'
import CustomNavBar from "../../component/CustomNavBar";

export default class NewAddress extends Component {
  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '添加收货地址'
  };

  regionChange = (e) => {
    console.log(e);
  };


  handleButton = (index) => {
    console.log(index);
  };



  render() {
    const buttons = [
      {
        text: '取消',
        bgColor: '#aaaaaa'
      },
      {
        text: '确定',
        bgColor: 'red'
      }
    ];
    return (
      <View>
        <CustomNavBar title='添加收货地址' url='/pages/user/user' />

        {/* 输入地址 */}
        <View className='container'>
          <ClInput titleWidth={200} title='姓名' placeholder='请输入姓名' className='in' />
          <ClInput titleWidth={200} title='手机号码' type='number' placeholder='请输入电话' className='in' />
          <ClSelect title='请选择区域' mode='region' onChange={this.regionChange.bind(this)} />
          <ClInput titleWidth={200} title='详细地址' placeholder='比如街道，楼盘号等' />
        </View>

        {/* 底部按钮 */}
        <ClShopBar
          border
          fix
          onClickButton={(index) => {this.handleButton(index)}}
          bgColor='gray'
          buttons={buttons}
        />

      </View>
    )
  }

}
