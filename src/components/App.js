import React from 'react-native';
import MapRegionInput from './MapRegionInput';

const {
  MapView,
  View,
  Text,
  StyleSheet,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    margin: 15,
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapRegion: null,
      mapRegionInput: null,
      annotations: null,
      isFirstLoad: true,
    };

    this._onRegionChange = this._onRegionChange.bind(this);
    this._onRegionChangeComplete = this._onRegionChangeComplete.bind(this);
    this._onRegionInputChanged = this._onRegionInputChanged.bind(this);
  }

  _getAnnotations(region) {
    return [{
      longitude: region.longitude,
      latitude: region.latitude,
      title: 'You Are Here',
    }];
  }

  _onRegionChange(region) {
    this.setState({
      mapRegionInput: region,
    });
  }

  _onRegionChangeComplete(region) {
    if (this.state.isFirstLoad) {
      this.setState({
        mapRegionInput: region,
        annotations: this._getAnnotations(region),
        isFirstLoad: false,
      });
    }
  }

  _onRegionInputChanged(region) {
    this.setState({
      mapRegion: region,
      mapRegionInput: region,
      annotations: this._getAnnotations(region),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
            style={styles.map}
            showsUserLocation={true}
            onRegionChange={this._onRegionChange}
            onRegionChangeComplete={this._onRegionChangeComplete}
            region={this.state.mapRegion || undefined}
            annotations={this.state.annotations || undefined} />

        <MapRegionInput
            onChange={this._onRegionInputChanged}
            region={this.state.mapRegionInput || undefined} />
      </View>
    );
  }
}
