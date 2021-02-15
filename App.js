import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebView
        cacheEnabled={false}
        source={{ uri: 'https://rrrepos.github.io/umd-project-org/app' }}
      />
    );
  }
}

//make this component available to the app
export default App;