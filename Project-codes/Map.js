import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const UCMapScreen = ({ navigation }) => {
  
  const universityCoordinates = {
    latitude: 39.1329,
    longitude: -84.5149,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>University of Cincinnati Map</Text>
      <MapView
        style={styles.map}
        initialRegion={universityCoordinates}
        showsUserLocation={true}
      >
        
        <Marker
          coordinate={universityCoordinates}
          title={"University of Cincinnati"}
          description={"Main Campus"}
        />
        {/* You can add more markers as needed */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
 
    container: {
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'stretch', 
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 16,
    },
    map: {
      flex: 1, 
  },
});

export default UCMapScreen;
