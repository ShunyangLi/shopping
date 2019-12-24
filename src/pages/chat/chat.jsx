import Taro, { Component } from '@tarojs/taro'
import { View, Image} from '@tarojs/components'
import { AtInput } from 'taro-ui'
import './chat.scss'

const send = require('./assets/send.png');

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  config = {
    navigationBarTitleText: '客服'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChange = (value) => {
    this.setState({
      message: value
    })
  };

  render () {
    return (
      <View>
        Chat page
      </View>
    )
  }

}
