import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

class App extends Component {
  constructor(props) {
    super(props)
    this.webviewRef = null;
    this.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
  }

  render() {
    return (
      <>
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
          <Button
            title="Pressed Me"
            onPress={() => {
              const clientResponseCode = `
                  try {
                    upload();
                    true;
                  } catch (e) {
                    window.alert("error"+e);
                  }
               `;
              this.webviewRef.injectJavaScript(clientResponseCode);
            }}
          />
        </View>
        <WebView
          cacheEnabled={false}
          source={{ uri: 'https://rrrepos.github.io/umd-project-org/app' }}
          ref={ref => this.webviewRef = ref}
          javaScriptEnabled={true}
          onMessage={this.onMessage}
        />
      </>
    );
  }
}

//make this component available to the app
export default App;