import React from 'react';
import {Notification} from 'amazeui-touch';

class Pos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 默认props
  static defaultProps = {
    isShow: true, // 是否展示
  }

  componentWillMount = () => {
    console.log('------ will mount ------');
    console.log(this.state);
    this.state.msg = this.props.msg;
  }

  // 挂载完成后立刻调用
  componentDidMount = () => {
    console.log('------ did mount ------');
    // setTimeout()
    console.log(this.state);
  }

  closeNotification = () => {

  }

  render() {
    return (
      <Notification
        className="xwf-nt"
        title="测试标题"
        amStyle="alert"
        visible={this.props.isShow}
        animated
        closeBtn={false}
        onDismiss={this.closeNotification} >
        {
          this.state.msg
        }
      </Notification>
    );
  }
}

export default Pos;