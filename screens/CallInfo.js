// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
// import { COLORS } from "../constants"; // Assuming you have a COLORS file
// import { callsData } from "../data/CallsData"; // Call history data (outgoing/incoming)

// const CallInfo = ({ route, navigation }) => {
//   const { userName, userImg, callHistory } = route.params; // user details and call history

//   const renderCallItem = ({ item }) => {
//     return (
//       <View style={styles.callItem}>
//         <Ionicons
//           name={
//             item.type === "outgoing" ? "call-outline" : "call-received-outline"
//           }
//           size={24}
//           color={item.type === "outgoing" ? COLORS.green : COLORS.red}
//         />
//         <View style={styles.callDetails}>
//           <Text style={styles.callDate}>{item.date}</Text>
//           <Text style={styles.callDuration}>{item.duration} mins</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Back Arrow Button */}
//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Ionicons name="arrow-back" size={28} color={COLORS.primary} />
//       </TouchableOpacity>

//       {/* User Profile Section */}
//       <View style={styles.userProfile}>
//         <Image source={userImg} style={styles.profileImage} />
//         <Text style={styles.userName}>{userName}</Text>
//       </View>

//       {/* Call Controls */}
//       <View style={styles.callControls}>
//         {/* Audio Call */}
//         <TouchableOpacity
//           style={styles.controlButton}
//           onPress={() => navigation.navigate("Calling", { userName, userImg })}
//         >
//           <Ionicons name="call-outline" size={36} color={COLORS.primary} />
//           <Text style={styles.controlText}>Call</Text>
//         </TouchableOpacity>

//         {/* Video Call */}
//         <TouchableOpacity style={styles.controlButton}>
//           <MaterialIcons name="video-call" size={36} color={COLORS.primary} />
//           <Text style={styles.controlText}>Video</Text>
//         </TouchableOpacity>

//         {/* Message */}
//         <TouchableOpacity
//           style={styles.controlButton}
//           onPress={() =>
//             navigation.navigate("Chat", { userName, userImage: userImg })
//           }
//         >
//           <FontAwesome name="comment" size={36} color={COLORS.primary} />
//           <Text style={styles.controlText}>Message</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Call History */}
//       <View style={styles.callHistory}>
//         <Text style={styles.historyTitle}>Call History</Text>
//         <FlatList
//           data={callHistory}
//           renderItem={renderCallItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//     padding: 20,
//   },
//   backButton: {
//     position: "absolute",
//     top: 20,
//     left: 10,
//   },
//   userProfile: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 50,
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 2,
//     borderColor: COLORS.primary,
//     marginBottom: 15,
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: COLORS.primary,
//   },
//   callControls: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 30,
//   },
//   controlButton: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   controlText: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: COLORS.primary,
//     marginTop: 5,
//   },
//   callHistory: {
//     flex: 1,
//   },
//   historyTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: COLORS.primary,
//     marginBottom: 10,
//   },
//   callItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: COLORS.lightGray,
//   },
//   callDetails: {
//     marginLeft: 15,
//   },
//   callDate: {
//     fontSize: 16,
//     color: COLORS.secondaryGray,
//   },
//   callDuration: {
//     fontSize: 14,
//     color: COLORS.secondaryGray,
//   },
// });

// export default CallInfo;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { callsData } from "../data"; // Importing the local call history data

const CallInfo = ({ route, navigation }) => {
  const { userName, userImg } = route.params; // user details, callHistory is from local data

  const renderCallItem = ({ item }) => {
    return (
      <View style={styles.callItem}>
        {/* <Ionicons
          name={
            item.type === "outgoing" ? "call-outline" : "arrow-down-outline"
          }
          size={24}
          color={item.type === "outgoing" ? COLORS.green : COLORS.red}
        /> */}
        <Ionicons
          style={styles.callarrow}
          name={
            item.callType === "incoming"
              ? "arrow-down-outline"
              : "arrow-up-outline"
          }
          size={16}
          color={item.callType === "missed" ? "red" : "green"}
        />
        <View style={styles.callDetails}>
          <Text style={styles.callDate}>{item.date}</Text>
          <Text style={styles.callDuration}>{item.duration} mins</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={28} color={COLORS.primary} />
      </TouchableOpacity>

      {/* User Profile Section */}
      <View style={styles.userProfile}>
        <Image source={userImg} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      {/* Call Controls */}
      <View style={styles.callControls}>
        {/* Audio Call */}
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => navigation.navigate("Calling", { userName, userImg })}
        >
          <Ionicons name="call-outline" size={36} color={COLORS.primary} />
          <Text style={styles.controlText}>Call</Text>
        </TouchableOpacity>

        {/* Video Call */}
        <TouchableOpacity style={styles.controlButton}>
          <MaterialIcons name="video-call" size={36} color={COLORS.primary} />
          <Text style={styles.controlText}>Video</Text>
        </TouchableOpacity>

        {/* Message */}
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() =>
            navigation.navigate("Chat", { userName, userImage: userImg })
          }
        >
          <FontAwesome name="comment" size={36} color={COLORS.primary} />
          <Text style={styles.controlText}>Message</Text>
        </TouchableOpacity>
      </View>

      {/* Call History */}
      <View style={styles.callHistory}>
        <Text style={styles.historyTitle}>Call History</Text>
        <FlatList
          data={callsData} // Use the local call history data
          renderItem={renderCallItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  userProfile: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  callControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  controlButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  controlText: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.primary,
    marginTop: 5,
  },
  callHistory: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
  },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  callDetails: {
    marginLeft: 15,
  },
  callDate: {
    fontSize: 16,
    color: COLORS.secondaryGray,
  },
  callDuration: {
    fontSize: 14,
    color: COLORS.secondaryGray,
  },
});

export default CallInfo;
