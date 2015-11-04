import React from 'react-native';
import Button from 'react-native-button';

const {
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

const regionText = {
  latitude: '0',
  longitude: '0',
  latitudeDelta: '0',
  longitudeDelta: '0',
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 5,
  },
  textInput: {
    width: 150,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
    fontSize: 13,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
  },
  changeButton: {
    alignSelf: 'center',
    margin: 30,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 0.5,
    borderColor: '#777777',
  },
});


class MapRegionInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    };

    this._change = this._change.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      region: nextProps.region || this.state.region
    });
  }

  _onChangeLatitude(e) {
    regionText.latitude = e.nativeEvent.text;
  }

  _onChangeLongitude(e) {
    regionText.longitude = e.nativeEvent.text;
  }

  _onChangeLatitudeDelta(e) {
    regionText.latitudeDelta = e.nativeEvent.text;
  }

  _onChangeLongitudeDelta(e) {
    regionText.longitudeDelta = e.nativeEvent.text;
  }

  _change() {
    this.setState({
      latitude: parseFloat(regionText.latitude),
      longitude: parseFloat(regionText.longitude),
      latitudeDelta: parseFloat(regionText.latitudeDelta),
      longitudeDelta: parseFloat(regionText.longitudeDelta),
    });

    this.props.onChange(this.state.region);
  }

  render() {
    const region = this.state.region || this.getInitialState().region;

    return (
      <View>
        <View style={styles.row}>
          <Text>
            {'Latitude'}
          </Text>
          <TextInput
            value={'' + region.latitude}
            style={styles.textInput}
            onChange={this._onChangeLatitude}
            selectTextOnFocus={true}
          />
        </View>
        <View style={styles.row}>
          <Text>
            {'Longitude'}
          </Text>
          <TextInput
            value={'' + region.longitude}
            style={styles.textInput}
            onChange={this._onChangeLongitude}
            selectTextOnFocus={true}
          />
        </View>
        <View style={styles.row}>
          <Text>
            {'Latitude delta'}
          </Text>
          <TextInput
            value={'' + region.latitudeDelta}
            style={styles.textInput}
            onChange={this._onChangeLatitudeDelta}
            selectTextOnFocus={true}
          />
        </View>
        <View style={styles.row}>
          <Text>
            {'Longitude delta'}
          </Text>
          <TextInput
            value={'' + region.longitudeDelta}
            style={styles.textInput}
            onChange={this._onChangeLongitudeDelta}
            selectTextOnFocus={true}
          />
        </View>
        <View style={styles.changeButton}>
          <Button onPress={this._change}>
            {'Change'}
          </Button>
        </View>
      </View>
    );
  }
}

MapRegionInput.propTypes = {
 region: React.PropTypes.shape({
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
    latitudeDelta: React.PropTypes.number.isRequired,
    longitudeDelta: React.PropTypes.number.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default MapRegionInput;
