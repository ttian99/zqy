import React from 'react';
import {
  Container,
  Group,
  Slider,
  Field,
  Button,
  List,
} from 'amazeui-touch';



const arr = [
  {labelBefore: "厂家", type: 'text'},
  {labelBefore: "快递收件人", type: 'text'},
  {labelBefore: "真实收件人", type: 'text'},
  {labelBefore: "收件时间", type: 'date'},
  {labelBefore: "物件名称", type: 'text'},
  {labelBefore: "物件数量", type: 'text'},
  {labelBefore: "物件型号", type: 'text'},
  {labelBefore: "备注", type: 'text'}
]


class EditExpress extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container >
        <Group
          header="物流收件信息录入"
          noPadded
        >
          <List>
           {arr.map((field, i) => {
              return (
                <List.Item
                  key={i}
                  // nested="input"
                >
                  <Field
                    {...field}
                  />
                </List.Item>
              );
            })}
          </List>

          <Button amStyle="primary" block>提交</Button>
        </Group>

      </Container>
    );
  }
}

export default EditExpress;
