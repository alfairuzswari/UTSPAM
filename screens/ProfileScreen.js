import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.avatarContainer}>
            <Image
            style={styles.avatar}
            source={require("../assets/poto.jpg")}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Image")}>
                <Text style={styles.buttonText}>Sunting Poto</Text>
            </TouchableOpacity>
            <Text style={styles.name}>M. Al Fairuz Swari</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>NIM : </Text>
            <Text style={styles.infoValue}>120140102</Text>
            </View>
            <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Mata Kuliah:</Text>
            <Text style={styles.infoValue}>Pengembangan Aplikasi Mobile</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  loginButton: {
    width: 100,
    height: 60,
    backgroundColor: "blue",
    borderRadius: 50,
    marginBottom: 10,
    bottom: 50,
  },
  coverImage: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color:'black'
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  buttonText:{
    color: 'blue',
  }
});

export default ProfileScreen;