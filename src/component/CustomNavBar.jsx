import Taro, { Component } from '@tarojs/taro'
import { AtNavBar }  from 'taro-ui'
import './custombar.scss'

export default class CustomNavBar extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * 点击返回按钮的时候
   * 返回到个人中心
   */
  handleBack = () => {
    Taro.switchTab({
      url: this.props.url
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    let title = this.props.title;
    return (
      <AtNavBar
        onClickLeftIcon={this.handleBack}
        leftIconType='chevron-left'
        title={title}
        color='#346FC2'
      />
    )
  }


}
