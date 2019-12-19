import Taro, { Component } from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import { AtSegmentedControl, AtInput, AtButton }  from 'taro-ui'
import LOGO from './assets/LOGO.png'
import CustomNavBar from "../../component/CustomNavBar";
import './login.scss'

let timer = null;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      loading: false,
      phone: '',
      password: '',
      info: '发送验证码',
      num: 60,
    }
  }

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '用户登录'
  };

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

  forgetPassword = () => {
    Taro.navigateTo({
      url: '/pages/forget/forget'
    }).then(res => {
      console.log(res);
    })
  };

  /**
   * 发送验证码
   * 首先设置倒计时
   */
  sendMessage = () => {
    if (timer !== null) return;
    timer = setInterval(() => {
      let counter = this.state.num + 's';
      let num = this.state.num - 1;
      console.log(num);
      this.setState({
        info: counter,
        num: num,
      });
      if (this.state.num <= 0) {
        clearTimeout(timer);
        timer = null;
        this.setState({
          info: '发送验证码',
          num: 60
        });
      }
    },1000);

    Taro.showToast({
      title: '短信已发送，请注意查收',
      icon: 'success',
      duration: 1000
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    let {info} = this.state;
    return (
      <View>
        {/* 返回导航栏 */}
        <CustomNavBar title='用户登录' url='/pages/user/user' />

        {/* tabs 选择 */}
        <AtSegmentedControl
          className='views'
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
                      name='phone'
                      border
                      type='phone'
                      placeholder='手机号码'
                      value={this.state.phone}
                      onChange={this.changePhone.bind(this)}
                    />
                    <AtInput
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
                  <Text onClick={this.forgetPassword} className='forget-password'>忘记密码?</Text>
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
                  name='phone'
                  border
                  type='phone'
                  placeholder='手机号码'
                  value={this.state.phone}
                  onChange={this.changePhone.bind(this)}
                />
                <AtInput
                  name='password'
                  border
                  type='password'
                  placeholder='验证码'
                  value={this.state.password}
                  onChange={this.changePassword.bind(this)}
                >
                  <Text onClick={this.sendMessage}>{info}</Text>
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
