import React from 'react';
import {Container, Group, Slider, Field, Button, List, } from 'amazeui-touch'; 
import Fetch from './Fetch';
import Pop from './Pop';
// import _ from 'lodash';

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

// const dataObj = {
//   mfr: '',
//   epsCnee: '',
//   trueCnee: '',
//   time: '',
//   goodsName: '',
//   goodsNum: '',
//   goodsMod: '',
//   desc: '',
// }


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

  getRefValue() {
    const dataObj = {};
    arr.forEach((item, id) => {
      const refName = arr[id].ref;
      const obj = this.refs[refName];
      const value = obj.getValue();
      dataObj[refName] = value;
    });
    return dataObj;
  }

  handleSubmit() {
    console.log('------- submit --------');
    const obj = this.getRefValue();
    console.log(obj);
    obj.cmd = 'add-info';
    Fetch(obj, (err, json) => {
      if(err) console.log(err)
      console.log('------- back ----')
      console.log(json);
    });
  }

  render() {
    return (
      <Container  scrollable={true}>
        <Pop />
        <Group
          header="物流收件信息录入"
          noPadded
        >
           {arr.map((field, i) => {
              return (
                  <Field
                    {...field}
                    key={i}
                    ref={arr[i].ref}
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
