import React from 'react';
import {Container, Group, Slider, Field, Icon, Button, Grid, List } from 'amazeui-touch';
import  Fetch from './Fetch';
import moment from 'moment';
import Pop from './Pop';

class SearchExpress extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dataList: []
    };
  }

  // 默认props
  static defaultProps = {
    dataList: [1,2,2,3,4,5,6,67,7,8,9,10,11,23]
  }

  // 挂载完成后立刻调用
  componentDidMount = () => {} 

  // 键盘按键抬起回调
  handleKeyUp = (evt) => {
    console.log('-------- keyup ------');
    evt.keyCode === 13 && this.handleClick()
  }

  handleClick = () => {
    console.log('-------- click --------');
    const searchValue = this.refs.input.getValue();
    console.log("-- searchValue -- "+ searchValue);

    const obj = {
      cmd: 'search-info',
      words: searchValue
    }
    Fetch(obj, (err, json) => {
      if(err) console.log(err)
      console.log('------- back ----')
      console.log(json);
      this.setDataList(json.data);
    });
  }

  setDataList = (arr) => {
    console.log('-------- setDataList -------');
    console.log(arr);
    this.setState({ dataList: arr });
  }

  render() {
    const btn = (
      <Button 
        onClick={this.handleClick.bind(this)}
      >查询</Button>
    );
    return (
      <Container scrollable={true}>
        <Pop />
        <Field
          ref="input"
          placeholder="请输入关键词..."
          labelBefore={<Icon name="search" />}
          btnAfter={btn}
          onKeyUp = { this.handleKeyUp } // 监听键盘的键抬起
        />
        <Grid>
        <List className="search-express-list" >
          {
            this.state.dataList.map((value, i) => {
              const date = moment(value.time).format('YYYY-MM-DD');
              return(
                <List.Item key={i}>
                {
                  date + " | " + value.goodsName + " | " + value.goodsNum + " | " + value.goodsMod + " | " + value.mfr + " | " + value.desc + " | " + value.epsCnee + " | " + value.trueCnee
                }
                </List.Item>
              )
            })
          }
        </List>
        </Grid>
      </Container>
    );
  }
}

export default SearchExpress;
