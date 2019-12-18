import Taro, { Component } from '@tarojs/taro'
import {View, Text, Button} from '@tarojs/components'
import './user.scss'

export default class User extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleLogin = () => {
    Taro.navigateTo({
      url: '/pages/login/login'
    }).then(res => {
      console.log(res);
    });
  };

  render () {
    return (
      <View className='index'>
        <Text>这是用户中心</Text>
        <Button onClick={this.handleLogin}>Login</Button>
      </View>
    )
  }

}
