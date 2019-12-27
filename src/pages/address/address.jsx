import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import { AtDivider } from 'taro-ui'
import { ClIcon, ClFloatButton } from "mp-colorui";
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

  addAddress = () => {
    console.log("添加地址");
    Taro.navigateTo({
      url: '/pages/newaddress/newaddress'
    }).then(res => {
      console.log(res);
    });
  };

  editAddress = () => {
    console.log("删除地址")
  };

  render() {
    let {address} = this.state;
    return (
      <View>
        <CustomNavBar title='地址管理' url='/pages/user/user' />
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
                <View className='at-col at-col-2 address' key={index} onClick={this.editAddress.bind(this)}>
                  <ClIcon iconName='edit' onClick={this.editAddress.bind(this)} />
                </View>
              </View>
              <AtDivider customStyle='top: 0%; height: 30px' />
              <ClFloatButton
                size='large'
                bgColor='red'
                shape='round'
                icon='add'
                shadow={false}
                closeWithShadow={false}
                move
                open={false}
                onClick={this.addAddress.bind(this)}
              />
            </View>
          ))}
      </View>
    )
  }

}
