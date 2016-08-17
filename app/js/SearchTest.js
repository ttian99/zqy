import React from 'react';
import {
  Container,
  Group,
  Slider,
} from 'amazeui-touch';

class SearchTest extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Group
          header="Page 2"
          noPadded
          >
        </Group>
      </Container>
    );
  }
}

export default SearchTest;
