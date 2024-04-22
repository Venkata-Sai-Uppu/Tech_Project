import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [course, setCourse] = useState('MSIT');
  const [age, setAge] = useState('25');
  const [email, setEmail] = useState('johndoe@example.com');

  const handleSignOut = () => {
    navigation.navigate('MyHelpScreen');
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleContact = () => {
    const supportEmail = 'support@example.com';
    Linking.openURL(`mailto:${supportEmail}`);
  };

  // Placeholder functions for Saved and History functionality
  const handleSavedPress = () => {
    console.warn('Saved functionality not implemented.');
  };

  const handleHistoryPress = () => {
    console.warn('History functionality not implemented.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFILE</Text>
      <View style={styles.profileInfo}>
        <Image source={require('./assets/profile-icon.png')} style={styles.profileImage} />
        <View style={styles.infoContainer}>
          {isEditing ? (
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Enter your name"
            />
          ) : (
            <Text style={styles.infoText}>{name}</Text>
          )}
          {isEditing ? (
            <TextInput
              style={styles.input}
              onChangeText={setCourse}
              value={course}
              placeholder="Enter your course"
            />
          ) : (
            <Text style={styles.infoText}>{course}</Text>
          )}
          {isEditing ? (
            <TextInput
              style={styles.input}
              onChangeText={setAge}
              value={age}
              placeholder="Enter your age"
            />
          ) : (
            <Text style={styles.infoText}>{age}</Text>
          )}
          {isEditing ? (
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Enter your email"
            />
          ) : (
            <Text style={styles.infoText}>{email}</Text>
          )}
        </View>
        <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
          <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSavedPress} style={styles.option}>
        <Text>SAVED</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHistoryPress} style={styles.option}>
        <Text>HISTORY Q/A</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContact} style={styles.option}>
        <Text>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <Text>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // white background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    marginLeft: 20,
    justifyContent: 'space-around',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#f0f0f0', // light grey background
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    fontSize: 18,
    color: '#1E90FF', // blue color
  },
  option: {
    alignSelf: 'stretch',
    backgroundColor: '#E0E0E0', // light grey background
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  signOutButton: {
    alignSelf: 'stretch',
    backgroundColor: '#ADD8E6', // pink background
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 200, // fixed width for text inputs
  },
});

export default ProfileScreen;
