import Taro, { Component } from '@tarojs/taro'
import { AtNavBar }  from 'taro-ui'
import './custombar.scss'
import {View} from "@tarojs/components";

export default class CustomNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: process.env.TARO_ENV
    }
  }

  /**
   * 点击返回按钮的时候
   * 返回到个人中心
   */
  handleBack = () => {
    Taro.navigateTo({
      url: this.props.url
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    let title = this.props.title;
    let {type} = this.state;
    return (
      <View>
      {type === 'h5' ? <AtNavBar
        onClickLeftIcon={this.handleBack}
        leftIconType='chevron-left'
        title={title}
        color='#346FC2'
      />: ''}
      </View>
    )
  }


}
