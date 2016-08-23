import React from 'react';
import {render} from 'react-dom';
import {Router,Route,Link,IndexRoute,hashHistory,withRouter} from 'react-router';
import {Container,TabBar} from 'amazeui-touch';

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    const {location, params, children, ...props} = this.props;
    const {router} = this.context;
    // const transition = children.props.transition || 'sfr';

    // {alert("screen.height = " + screen.height )}
    return (
      
      <Container direction="column" id="main-cnt">
        
        <Container
          transition='sfr'
          // fade transition example
          // transition='fade'
          // transitionEnterTimeout={450}
          // transitionLeaveTimeout={300}
        > 
        {this.props.children}
        </Container>
        
        <TabBar
          amStyle=""
          className="main-tabbar"
        >
          <TabBar.Item
            component={Link}
            icon="list"
            title="编辑物流信息"
            selected={router.isActive('/editExpress', true)}
            to="/editExpress"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="home"
            title="查询物流信息"
            selected={router.isActive('/searchExpress', true)}
            to="/searchExpress"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="list"
            title="编辑实验记录"
            selected={router.isActive('/editExpress', true)}
            to="/editExpress" 
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="info"
            title="查询实验记录"
            selected={router.isActive('/editExpress', true)}
            to="/editExpress"
            onlyActiveOnIndex
          />
        </TabBar>
      </Container>
    );
  }
}

export default App;
