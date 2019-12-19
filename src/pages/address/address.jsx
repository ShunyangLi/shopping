import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import { AtIcon, AtDivider, AtButton, AtNavBar } from 'taro-ui'
import './address.scss'
import CustomNavBar from "../../component/CustomNavBar";

export default class Address extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: [
        {
          name: '李顺阳',
          phone: '15639251396',
          add: '河南省周口市太康县'
        },
        {
          name: 'Charles',
          phone: '0413164212',
          add: 'unsw'
        },

      ]
    }
  }

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '地址管理'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 返回上一页
  handleBack = () => {
    Taro.navigateTo({
      url: '/pages/user/user'
    }).then(res=> {
      console.log(res);
    });
  };

  // 添加新的收货地址
  handleAdd = () => {
    console.log("add address");
  };

  render() {
    let {address} = this.state;
    return (
      <View>
        <AtNavBar
          onClickRgIconSt={this.handleAdd}
          onClickLeftIcon={this.handleBack}
          title='地址管理'
          leftIconType='chevron-left'
          rightFirstIconType='add'
        />
          {address.map((item, index) => (
            <View key={index} style='margin: 5%'>
              <View className='at-row at-row__align--center contain' key={index}>
                <View className='at-col at-col-3 address' key={index}>{item.name}</View>
                <View className='at-col at-col-6 address' key={index}>
                  <View>
                    { item.phone }
                  </View>
                  <View>
                    { item.add }
                  </View>
                </View>
                <View className='at-col at-col__offset-2' />
                <View className='at-col at-col-2 address' key={index}>
                  <AtIcon value='close' color='red' />
                </View>
              </View>
              <AtDivider customStyle='top: 0%; height: 30px' />
            </View>
          ))}
      </View>
    )
  }

}
