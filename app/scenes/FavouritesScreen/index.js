/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectFavourites } from './selectors';
import { Row, Separator } from '../../components/Row';

const FavouritesScreen = props => (
  <FlatList
    data={props.favourites}
    keyExtractor={item => `${item.ifsc}`}
    renderItem={({ item }) => (
      <Row
        title={item.ifsc}
        subtitle={item.bank}
        onPress={() => props.navigation.push('MainScreen', { data: item })}
      />
    )}
    ItemSeparatorComponent={Separator}
    ListHeaderComponent={() => <Separator />}
    ListFooterComponent={() => <Separator />}
    contentContainerStyle={{ paddingVertical: 20 }}
  />
);

FavouritesScreen.propTypes = {
  favourites: PropTypes.array
};

const mapStateToProps = () =>
  createStructuredSelector({
    favourites: selectFavourites()
  });

export default connect(mapStateToProps)(FavouritesScreen);
export { FavouritesScreen as FavouritesScreenTest };
