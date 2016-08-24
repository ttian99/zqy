import React from 'react';
import {Container, Group, Slider, Field, Icon, Button, Grid, List } from 'amazeui-touch';

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

  render() {
    return (
      <Container scrollable={true}>
        <Field
          placeholder="请输入关键词..."
          labelBefore={<Icon name="search" />}
          btnAfter={<Button>查询</Button>}
        />
        <Grid>
        <List className="search-express-list" >
          {
            this.props.dataList.map((value, i) => {
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
