import React from 'react';
import {Container, Group, Slider, Field, Button, List, } from 'amazeui-touch'; 
import Fetch from './Fetch';
import _ from 'lodash';

const arr = [
  {labelBefore: "厂家", ref: 'mfr', type: 'text'},
  {labelBefore: "快递收件人", ref: 'epsCnee', type: 'text'},
  {labelBefore: "真实收件人", ref:'trueCnee', type: 'text'},
  {labelBefore: "收件时间", ref: 'time', type: 'date'},
  {labelBefore: "物件名称", ref:'goodsName', type: 'text'},
  {labelBefore: "物件数量", ref: 'goodsNum', type: 'text'},
  {labelBefore: "物件型号", ref: 'goodsMod', type: 'text'},
  {labelBefore: "备注", ref: 'desc', type: 'text'}
]


class EditExpress extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      epsData: {
        mfr: '',
        epsCnee: '',
        trueCnee: '',
        time: '',
        goodsName: '',
        goodsNum: '',
        goodsMod: '',
        desc: '',
      }
    };
  }

  handleSubmit() {
    console.log('------- submit --------');
    
    _.forOwn(o, function (value, key) {
      result.push(key + ': ' + value);
    });

    Fetch({
      cmd: 'search-info',
      words: '哈哈'
    }, (err, json) => {
      console.log('------- back ----')
    });
  }

  render() {
    return (
      <Container  scrollable={true}>
        <Group
          header="物流收件信息录入"
          noPadded
        >
           {arr.map((field, i) => {
              return (
                  <Field
                    {...field}
                    key={i}
                    defaultValue={this.state.epsData[arr[i]]}
                  />
              );
            })}
          <Button amStyle="primary" block onClick={this.handleSubmit.bind(this)}>提交</Button>
        </Group>

      </Container>
    );
  }
}

export default EditExpress;
