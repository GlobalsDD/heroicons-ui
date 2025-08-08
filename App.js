import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { icons } from './icons';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {icons.map(({ name, Icon }) => (
        <View key={name} style={styles.icon}>
          <Icon width={32} height={32} />
          <Text style={styles.label}>{name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'center'
  },
  icon: {
    alignItems: 'center',
    width: 80,
    margin: 8,
  },
  label: {
    marginTop: 4,
    fontSize: 10,
    textAlign: 'center',
  },
});
