/*
 * 忘记密码页面
 */
import Taro, { Component } from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import { AtInput, AtButton }  from 'taro-ui'
import './forget.scss'
import CustomNavBar from "../../component/CustomNavBar";
import LOGO from "../login/assets/LOGO.png";

let timer = null;

export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      msg: '',
      info: '发送验证码',
      num: 60,
    }
  }

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '忘记密码'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

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

  changeMsg = (value) => {
    this.setState({
      msg: value
    });
    return value;
  };


  render() {
    let {info} = this.state;
    return (
      <View>
        {/* 如果点击返回就表示返回到登录页面 */}
        <CustomNavBar title='忘记密码' url='/pages/login/login' />
        <View className='login'>
          <View className='login-logo'>
            <Image src={LOGO} className='login-logo-img' />
          </View>
          <View className='login-wrap'>
            <AtInput
              name='password'
              border
              type='password'
              placeholder='新密码'
              value={this.state.password}
              onChange={this.changePassword.bind(this)}
            >
            </AtInput>

            <AtInput
              name='phone'
              border
              type='phone'
              placeholder='手机号码'
              value={this.state.phone}
              onChange={this.changePhone.bind(this)}
            />
            <AtInput
              name='msg'
              border
              type='text'
              placeholder='验证码'
              value={this.state.msg}
              onChange={this.changePassword.bind(this)}
            >
              <Text onClick={this.sendMessage}>{info}</Text>
            </AtInput>

            <AtButton
              className='login-button'
              loading={this.state.loading}
              type='primary'
            >
              提交
            </AtButton>
          </View>
        </View>
      </View>
    )
  }


}
