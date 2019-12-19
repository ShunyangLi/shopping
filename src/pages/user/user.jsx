import Taro, { Component } from '@tarojs/taro'
import {View} from '@tarojs/components'
import Profile from "./profile/profile";
import Menu from "./menu/menu";
import './user.scss'

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        isLogin: false,
        avatar: '',
        nickname: ''
      }
    }
  }


  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '个人中心'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>

        {/* 用户个人信息 */}
        <Profile userProfile={this.state.userProfile} />

        {/* 应该是菜单 */}
        <Menu />
      </View>
    )
  }

}
