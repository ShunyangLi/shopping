import Taro, { Component } from '@tarojs/taro'
import {ScrollView, View} from "@tarojs/components";
import classNames from 'classnames'
import { ClIcon } from "mp-colorui";
import './pop.scss'

// 弹窗显示，选商品规格
export default class Pop extends Component {

  static defaultProps = {
    visible: false,
    compStyle: '',
    onClose: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isShow: props.visible
    }
  }

  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;
    const { isShow } = this.state;

    if (visible !== isShow) {
      this.setState({
        isShow: visible
      });
    }
  }

  handleTouchMove = (e) => {
    e.stopPropagation()
  };


  render() {
    const { onClose, compStyle } = this.props;
    const { isShow } = this.state;

    return (
      <View
        className={classNames('popup', isShow && 'popup--visible')}
        onTouchMove={this.handleTouchMove}
        style={compStyle}
      >
        <View className='popup-mask' onClick={onClose} />

        <View className='popup-wrapper'>
          <ScrollView
            scrollY
            className='popup-content'
            style={{ height: Taro.pxTransform(750) }}
          >
            {/* 商品规格内容部分 */}
            {this.props.children}
          </ScrollView>
          <View className='popup-close' onClick={onClose}>
            <ClIcon iconName='close' />
          </View>
        </View>
      </View>
    )
  }

}
