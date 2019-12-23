import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import { ClSelect } from "mp-colorui";
import './newaddress.scss'

export default class NewAddress extends Component {
  constructor(props) {
    super(props);
  }

  regionChange = (e) => {
    console.log(e);
  };

  render() {
    return (
      <View>
        Add new address
        <ClSelect mode='region' title='选择地点' onChange={this.regionChange.bind(this)} />
      </View>
    )
  }

}
