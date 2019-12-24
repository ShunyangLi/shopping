import Taro, { Component } from '@tarojs/taro'
import {Image, View, Text} from "@tarojs/components";
import { AtAvatar } from 'taro-ui';
import backgroud from '../assets/bg.png';
import defaultAvatar from '../../../assets/default-avatar.png';
import './profile.scss'

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleLogin = () => {
    if (!this.props.userProfile.isLogin) {
      Taro.navigateTo({
        url: '/pages/login/login'
      }).then(res => {
        console.log(res);
      });
    }
  };


  render() {
    let {userProfile} = this.props;
    // console.log(userProfile);
    return (
      <View className='profile'>
        <Image src={backgroud} className='profile-backgroud' mode='widthFix' />
        <View className='profile-wrap'>
          {/* 用户头像 */}
          <View className='avatar' onClick={this.handleLogin}>
            <AtAvatar circle image={userProfile.avatar || defaultAvatar} />
          </View>
          {/* 用户名字 */}
          <View className='profile-info' onClick={this.handleLogin}>
            <Text className='profile-info-name'>
              {userProfile.nickname || '未登录'}
            </Text>
            <Text className='profile-info-tip'>点击登录账号</Text>
          </View>
        </View>
      </View>
    )
  }

}
