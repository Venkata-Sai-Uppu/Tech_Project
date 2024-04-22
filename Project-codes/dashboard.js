import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.notification}>Notifications</Text>
        <Text style={styles.title}>DASHBOARD</Text>
        <Button title="Menu" onPress={() => navigation.navigate('profile')} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={[styles.item, styles.canvas]} onPress={() => navigation.navigate('Canvas')}>
          <Text>CANVAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, styles.catalyst]} onPress={() => navigation.navigate('Catalyst')}>
          <Text>CATALYST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, styles.course]} onPress={() => navigation.navigate('Course')}>
          <Text>COURSE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, styles.sandbox]} onPress={() => navigation.navigate('Sandbox')}>
          <Text>SANDBOX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, styles.map]} onPress={() => navigation.navigate('Map')}>
          <Text>MAPS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#FDCB5F', // Example color for Canvas
  },
  catalyst: {
    backgroundColor: '#FDCB5F', // Example color for Catalyst
  },
  course: {
    backgroundColor: '#FDCB5F', // Example color for Course
  },
  sandbox: {
    backgroundColor: '#FDCB5F', // Example color for Sandbox
  },
  map: {
    backgroundColor: '#FDCB5F', // Example color for Map
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  notification: {
    // Add styles for notification icon
  },
  title: {
    // Add styles for the dashboard title
    fontWeight: 'bold',
  },
  menu: {
    // Add styles for menu icon
  },
  content: {
    // Flexbox layout to arrange items in a grid
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-around',
  },
  item: {
    // Styling for each item (canvas, catalyst, etc.)
    width: '45%', // Approximately two items per row
    aspectRatio: 1, // To keep a square shape
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
});

export default DashboardScreen;
