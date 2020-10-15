import React, { Component } from 'react';
import { TextInput, Text, Button, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {
  selectData,
  selectDataErrorMessage,
  selectDataIsLoading
} from './selectors';
import { rootScreenActions } from './reducer';
import { favouritesScreenActions } from '../FavouritesScreen/reducer';

const viewStyles = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 10,
  width: 200,
  marginLeft: 20,
  marginRight: 30
};

const textStyles = {
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginRight: 5,
  width: 80
};

export class RootScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  componentDidMount() {
    this.props.startup();
  }

  inputChange(text) {
    this.setState({ query: text });
  }

  buttonPressed = () => {
    this.props.fetchData(this.state.query);
    // this.setState({ query: '' });
  };

  addFavourite = () => {
    this.props.setFavourites(this.props.data);
  };

  render() {
    // console.log(this.props.data.isFavourite);
    return (
      <SafeAreaView style={{ margin: 50 }}>
        <Text style={{ marginBottom: 10 }}>Enter IFSC Code</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            padding: 10
          }}
          onChangeText={text => this.inputChange(text)}
          value={this.state.query}
        />
        <Button title="Search" color="#000" onPress={this.buttonPressed} />
        {this.props.isLoading && <ActivityIndicator size="large" />}
        {this.props.data?.ifsc && !this.props.isLoading && (
          <View
            style={{
              marginTop: 50,
              borderWidth: 2,
              borderColor: 'black',
              paddingTop: 10,
              paddingBottom: 10,
              marginBottom: 20
            }}
          >
            <View style={viewStyles}>
              <Text style={textStyles}>IFSC Code :</Text>
              <Text>{this.props.data.ifsc}</Text>
            </View>
            <View style={viewStyles}>
              <Text style={textStyles}>Bank :</Text>
              <Text>{this.props.data.bank}</Text>
            </View>
            <View style={viewStyles}>
              <Text style={textStyles}>Branch :</Text>
              <Text>{this.props.data.branch}</Text>
            </View>
            <View style={viewStyles}>
              <Text style={textStyles}>ADDRESS :</Text>
              <Text>{this.props.data.address}</Text>
            </View>
            <View style={viewStyles}>
              <Text style={textStyles}>Centre :</Text>
              <Text>{this.props.data.centre}</Text>
            </View>
            <View style={viewStyles}>
              <Text style={textStyles}>City :</Text>
              <Text>{this.props.data.city}</Text>
            </View>
            <View style={viewStyles}>
              <Text style={textStyles}>District :</Text>
              <Text>{this.props.data.district}</Text>
            </View>
          </View>
        )}
        {this.props.data?.ifsc && !this.props.isLoading && (
          <Button
            title="Add To Favourites"
            color="#000"
            onPress={this.addFavourite}
          />
        )}
        {this.props.errorMessage && !this.props.isLoading && (
          <Text style={{ marginTop: 20, color: 'red' }}>
            {this.props.errorMessage}
          </Text>
        )}
      </SafeAreaView>
    );
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
  fetchData: PropTypes.func,
  data: PropTypes.object,
  setFavourites: PropTypes.func,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  data: selectData(),
  isLoading: selectDataIsLoading(),
  errorMessage: selectDataErrorMessage()
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(rootScreenActions.startup()),
  fetchData: query => dispatch(rootScreenActions.requestFetchData(query)),
  setFavourites: data => dispatch(favouritesScreenActions.setFavourites(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);
export { RootScreen as RootScreenTest };
