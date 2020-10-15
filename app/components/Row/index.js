import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3a3a3a'
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    marginTop: 2
  },
  separator: {
    backgroundColor: '#ececec',
    height: 1
  },
  right: {
    alignItems: 'flex-end',
    flex: 1
  }
});

export const Row = ({ onPress, title, subtitle }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <View style={styles.right}>
      <Ionicons name="ios-arrow-forward" color="#666" size={20} />
    </View>
  </TouchableOpacity>
);

Row.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export const Separator = () => <View style={styles.separator} />;
