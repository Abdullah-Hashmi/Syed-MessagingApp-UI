import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import images from "../constants/images"; // Adjust according to your file structure
// import { stories } from "../data";
import { statusData } from "../data";

// Sample joined groups data using available images
const groupsData = [
  {
    id: "1",
    name: "Family Group",
    groupPic: images.user1, // Use provided images
  },
  {
    id: "2",
    name: "Work Team",
    groupPic: images.user5, // Use provided images
  },
  {
    id: "3",
    name: "Friends Hangout",
    groupPic: images.user2, // Use provided images
  },
  {
    id: "4",
    name: "React Native",
    groupPic: images.user3, // Use provided images
  },
  {
    id: "5",
    name: "Abdullah Fans Club",
    groupPic: images.user4, // Use provided images
  },
  {
    id: "6",
    name: "SRK fans",
    groupPic: images.user6, // Use provided images
  },
  {
    id: "7",
    name: "Hangama news",
    groupPic: images.user7, // Use provided images
  },
  {
    id: "8",
    name: "Pak Politics",
    groupPic: images.user8, // Use provided images
  },
  {
    id: "9",
    name: "Status Group",
    groupPic: images.user9, // Use provided images
  },
  {
    id: "10",
    name: "Universty Group",
    groupPic: images.user10, // Use provided images
  },
  // Add more groups as needed
];

// console.log(userData);
const Status = () => {
  const renderStatusItem = ({ item }) => (
    <View style={styles.statusContainer}>
      <Image source={item.profilePic} style={styles.profilePic} />
      <Text style={styles.userStatus}>{item.status}</Text>
    </View>
  );

  const renderGroupItem = ({ item }) => (
    <View style={styles.groupContainer}>
      <Image source={item.groupPic} style={styles.groupPic} />
      <Text style={styles.groupName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <View>
        <Text style={styles.groupText}>Status</Text>
      </View>
      <View>
        <FlatList
          data={statusData}
          renderItem={renderStatusItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.statusListContainer}
          ListHeaderComponent={<View style={styles.header} />} // Optional header
        />
      </View>
      <View>
        <Text style={styles.groupText}>The Groups </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={groupsData}
          renderItem={renderGroupItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.groupListContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    marginTop: 20,
  },
  statusListContainer: {
    paddingHorizontal: 16,
    marginBottom: 16, // Space between statuses and groups
    backgroundColor: "white", // Light grey background
    height: 140,
  },
  statusContainer: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height: 140,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  userStatus: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    width: 100,
  },
  groupListContainer: {
    // Top: 30,
    paddingHorizontal: 16,
    // backgroundColor: "black", // Light grey background
    // marginTop: 100,
    flex: 1,
  },
  groupContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  groupPic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  groupName: {
    fontSize: 16,
    color: "#333333",
  },
  groupListContainer: {
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  groupText: {
    fontWeight: "bold", // Make text bold
    color: "#333333", // Dark grey color
    marginVertical: 20, // Vertical margin to separate from other elements
    marginHorizontal: 16, // Horizontal margin to align with other content
    fontSize: 18,
  },
});

export default Status;
