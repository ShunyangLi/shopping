import Taro, { Component } from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import { AtSegmentedControl, AtInput, AtButton }  from 'taro-ui'
import LOGO from './assets/LOGO.png'
import './login.scss'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      loading: false,
      phone: '',
      password: '',
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChangeTab (value) {
    this.setState({
      current: value
    })
  }

  changePhone = (value) => {
    this.setState({
      phone: value
    });
    return value;
  };

  changePassword = (value) => {
    this.setState({
      password: value
    });
    return value;
  };


  sendMessage = () => {
    Taro.showToast({
      title: '短信已发送，请注意查收',
      duration: 1000
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <View className='views'>
        <AtSegmentedControl
          values={['密码登陆', '短信登陆']}
          onClick={this.handleChangeTab.bind(this)}
          current={this.state.current}
        />
        {
          this.state.current === 0
            ? <View className='login'>
                <View className='login-logo'>
                  <Image src={LOGO} className='login-logo-img' />
                </View>
                <View className='login-wrap'>
                    <AtInput
                      className='input'
                      name='phone'
                      border
                      type='phone'
                      placeholder='手机号码'
                      value={this.state.phone}
                      onChange={this.changePhone.bind(this)}
                    />
                    <AtInput
                      className='input'
                      name='password'
                      border
                      type='password'
                      placeholder='密码不能少于6位数'
                      value={this.state.password}
                      onChange={this.changePassword.bind(this)}
                    />
                  <AtButton
                    className='login-button'
                    loading={this.state.loading}
                    type='primary'
                  >
                    登录
                  </AtButton>
                </View>
            </View>
            :
            // 验证码登录
            <View className='login'>
              <View className='login-logo'>
                <Image src={LOGO} className='login-logo-img' />
              </View>
              <View className='login-wrap'>
                <AtInput
                  className='input'
                  name='phone'
                  border
                  type='phone'
                  placeholder='手机号码'
                  value={this.state.phone}
                  onChange={this.changePhone.bind(this)}
                />
                <AtInput
                  className='input'
                  name='password'
                  border
                  type='password'
                  placeholder='验证码'
                  value={this.state.password}
                  onChange={this.changePassword.bind(this)}
                >
                  <Text onClick={this.sendMessage}>发送验证码</Text>
                </AtInput>
                <AtButton
                  className='login-button'
                  loading={this.state.loading}
                  type='primary'
                >
                  登录
                </AtButton>
              </View>
              </View>
        }

      </View>
    )
  }

}
