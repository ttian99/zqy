import React from 'react';
import {Container, Group, Slider, Field, Icon, Button, Grid, List } from 'amazeui-touch';



const arr = [1,2,2,3,4,5,6,67,7,8,9,10];


class SearchExpress extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Container scrollable={true}>
        <Field
          placeholder="请输入关键词..."
          labelBefore={<Icon name="search" />}
          btnAfter={<Button>查询</Button>}
        />
        <Grid>
        <List>
          {
            arr.map((value, i) => {
              return(
                <List.Item key={i}>{value}</List.Item>
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
