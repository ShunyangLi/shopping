import Taro, { Component } from '@tarojs/taro'
import {View, Image, Text} from "@tarojs/components";
import { AtInputNumber } from 'taro-ui'
import classNames from 'classnames'
import './spec.scss';

// 加入购物车时的详细信息
export default class Spec extends Component {
  static defaultProps = {
    data: {},
    selected: {},
    onSelect: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      specList: [
        {
          id: 1,
          type: '单罐包邮',
          price: 30
        },
        {
          id: 2,
          type: '三罐包邮',
          price: 60
        },
        {
          id: 3,
          type: '六罐包邮',
          price: 80
        }
      ],
      num: 1,
      selected: {
        id: 0,
        price: 0,
        type: ''
      },
      totalPrice: 0
    }
  }

  // 设置数量改变
  handleNumChange = (value) => {
    this.setState({
      num: value
    });
    this.props.onSelect({id: this.state.selected.id, num: this.state.num});
    this.handleChangePrice(parseFloat(this.state.selected.price) * value);

  };

  // 规格被选定
  handleSelect = (item) => {
    // 设置被选中的
    this.setState({
      selected: {
        id: item.id,
        price: item.price,
        type: item.type
      }
    });

    this.props.onSelect({ id: item.id, num: this.state.num, type: item.type});
    this.handleChangePrice(parseFloat(item.price) * parseInt(this.state.num));
  };

  // 设置价格的改变
  handleChangePrice = (price) => {
    this.setState({
      totalPrice: price
    });
  };

  // 判断是不是被选定
  isSelected = (item) => this.state.selected.id=== item.id;

  render() {
    const { data } = this.props;
    const { specList } = this.state;

    return (
      <View className='item-spec'>
        <View className='item-spec__info'>
          {/* 照片 TODO 需要修改一部分东西 */}
          <Image
            className='item-spec__info-img'
            src={this.state.img || data.primaryPicUrl}
          />

          {/* 价格页面 */}
          <View className='item-spec__info-wrap'>
            <View className='item-spec__info-price'>
              <Text className='item-spec__info-price-txt'>
                {/* 这个价格应该根据实际改变而改变 */}
                {`价格:$${this.state.totalPrice}`}
              </Text>
            </View>
            <Text className='item-spec__info-tip'>请选择规格属性</Text>
          </View>
        </View>

        {/* 商品规格 */}
        <View className='item-spec__group'>
          <Text className='item-spec__group-title'>规格</Text>
          <View className='item-spec__group-list'>
            {specList.map(item => (
              <Text
                key={item.id}
                className={classNames('item-spec__group-list-item', {
                  'item-spec__group-list-item--active': this.isSelected(item),
                })}
                onClick={this.handleSelect.bind(this, item)}
              >
                {item.type}
              </Text>
            ))}
          </View>
        </View>

        {/* 数量 TODO 还没改完 */}
        <View className='item-spec__group'>
          <Text className='item-spec__group-title'>数量</Text>
          {/* 选择商品数量 */}
          <AtInputNumber
            min={1}
            max={10}
            step={1}
            value={this.state.num}
            customStyle='width: 100px;margin-top:2%'
            onChange={this.handleNumChange.bind(this)}
          />
        </View>
      </View>
    )
  }

}
