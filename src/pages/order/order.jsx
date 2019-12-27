import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import { AtTabs, AtTabsPane } from 'taro-ui';
import './order.scss';
import CustomNavBar from "../../component/CustomNavBar";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '订单中心'
  };

  handleClick (value) {
    this.setState({
      current: value
    })
  }


  render() {
    const tabList = [{ title: '全部' }, { title: '待付款' }, { title: '待收货' }, { title: '待评价' }, { title: '退款中' }];

    return (
      <View>
        <CustomNavBar title='订单中心' url='/pages/user/user' />
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
          swipeable
          scroll
        >
          <AtTabsPane current={this.state.current} index={0} >
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
              全部订单
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
              待付款
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
              待收货
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={3}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
              待评价
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={4}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
              退款中
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }

}
