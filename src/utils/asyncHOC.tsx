import * as React from 'react';

export default function asyncHOC(importComponent: () => any) {
  class AsyncComponent extends React.Component {
    state = {
      Com: null,
    };

    async componentDidMount() {
      const { default: Com } = await importComponent();
      this.setState({ Com });
    }

    render() {
      const { Com }: { Com: any } = this.state;
      return Com ? <Com {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
