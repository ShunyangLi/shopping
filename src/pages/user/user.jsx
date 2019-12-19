import Taro, { Component } from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import Profile from "./profile/profile";
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

        <Profile userProfile={this.state.userProfile} />

        <Text>这是用户中心</Text>
      </View>
    )
  }

}
