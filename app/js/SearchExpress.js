import React from 'react';
import {Container, Group, Slider, Field, Icon, Button, Grid, List } from 'amazeui-touch';



const arr = [];


class SearchExpress extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Container {...this.props}>
        <Field
          placeholder="请输入关键词..."
          labelBefore={<Icon name="search" />}
          btnAfter={<Button>查询</Button>}
        />
        <Grid>
        <List>
          {
            arr.map((value, i) => {

            })
          }
        </List>
        </Grid>
      </Container>
    );
  }
}

export default SearchExpress;
