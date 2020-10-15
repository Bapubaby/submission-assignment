/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

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

export const DetailsScreen = ({ navigation }) => {
  const { data } = navigation.state.params;
  return (
    <SafeAreaView style={{ margin: 50 }}>
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
          <Text style={textStyles}>Bank :</Text>
          <Text>{data.bank}</Text>
        </View>
        <View style={viewStyles}>
          <Text style={textStyles}>Branch :</Text>
          <Text>{data.branch}</Text>
        </View>
        <View style={viewStyles}>
          <Text style={textStyles}>ADDRESS :</Text>
          <Text>{data.address}</Text>
        </View>
        <View style={viewStyles}>
          <Text style={textStyles}>Centre :</Text>
          <Text>{data.centre}</Text>
        </View>
        <View style={viewStyles}>
          <Text style={textStyles}>City :</Text>
          <Text>{data.city}</Text>
        </View>
        <View style={viewStyles}>
          <Text style={textStyles}>District :</Text>
          <Text>{data.district}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
