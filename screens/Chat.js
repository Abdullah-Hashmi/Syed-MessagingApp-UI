// import { View, Text } from "react-native";
// import React from "react";

// const Chat = () => {
//   return (
//     <View>
//       <Text>Chat</Text>
//     </View>
//   );
// };

// export default Chat;
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   TextInput,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { COLORS, FONTS, SIZES, icons, images } from "../constants";
// import { FontAwesome } from "@expo/vector-icons";
// import { GiftedChat } from "react-native-gifted-chat";
// import { Bubble } from "react-native-gifted-chat";

// const Chat = ({ navigation }) => {
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS, SIZES, icons } from "../constants"; // Import icons from constants
import { COLORS } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import { GiftedChat } from "react-native-gifted-chat";
import { Bubble } from "react-native-gifted-chat";

const Chat = ({ route, navigation }) => {
  const { userName, userImage } = route.params;
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleInputText = (text) => {
    setInputMessage(text);
  };

  const renderMessage = (props) => {
    const { currentMessage } = props;

    if (currentMessage.user._id === 1) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: COLORS.primary,
                marginRight: 12,
                marginVertical: 12,
              },
            }}
            textStyle={{
              right: {
                color: COLORS.white,
              },
            }}
          />
        </View>
      );
    }
  };

  const renderTime = (props) => {
    const { currentMessage } = props;
    const messageTime = new Date(currentMessage.createdAt);
    const formattedTime = `${messageTime.getHours()}:${messageTime.getMinutes()} ${
      messageTime.getHours() >= 12 ? "PM" : "AM"
    }`;
    return <Text style={styles.time}>{formattedTime}</Text>;
  };

  const submitHandler = () => {
    const currentTime = new Date();
    const message = {
      _id: Math.random().toString(36).toString(7),
      text: inputMessage,
      createdAt: currentTime,
      user: { _id: 1 },
    };
    setMessages((previousMessage) =>
      GiftedChat.append(previousMessage, [message])
    );

    setInputMessage("");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 16,
          borderColor: COLORS.gray,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 0.8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginHorizontal: 12 }}
          >
            <Image
              source={icons.back}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
          <View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 4,
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: COLORS.primary,
                zIndex: 999,
                borderboWidth: 2,
                borderColor: COLORS.white,
              }}
            />
            <Image
              source={userImage} // Use userImage from route params
              resizeMode="contain"
              style={{
                height: 48,
                width: 48,
                borderRadius: 999,
              }}
            />
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text
              style={{
                ...FONTS.h4,
                color: COLORS.black,
              }}
            >
              {userName} {/* Display userName from route params */}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "regular",
                color: COLORS.primary,
              }}
            >
              Online
            </Text>
          </View>
        </View>
      </View>

      <GiftedChat
        messages={messages}
        renderInputToolbar={() => {
          return null;
        }}
        user={{ _id: 1 }}
        minInputToolbarHeight={0}
        renderMessage={renderMessage}
        renderTime={renderTime}
      />

      <View style={styles.inputContainer}>
        <View style={styles.inputMessageContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor={COLORS.black}
            value={inputMessage}
            onChangeText={handleInputText}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={submitHandler} style={styles.sendButton}>
              <FontAwesome name="send" size={22} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.white,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  inputMessageContainer: {
    height: 54,
    width: SIZES.width - 48,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryWhite,
    borderRadius: 16,
    alignItems: "center",
    borderColor: "rgba(128,128,128,0.4)",
    borderWidth: 1,
  },
  input: {
    color: COLORS.black,
    flex: 1,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: COLORS.white,
    padding: 4,
    borderRadius: 999,
    marginHorizontal: 6,
  },
  time: {
    paddingHorizontal: 5,
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: 5,
  },
});

export default Chat;

// export default Chat;

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   TextInput,
// } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { COLORS, FONTS, SIZES, icons, images } from "../constants";
// import { Feather, FontAwesome } from "@expo/vector-icons";
// import { GiftedChat } from "react-native-gifted-chat";
// import { Bubble } from "react-native-gifted-chat";

// const Chat = ({ navigation }) => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");

//   const handleInputText = (text) => {
//     setInputMessage(text);
//   };

//   const renderMessage = (props) => {
//     const { currentMessage } = props;

//     if (currentMessage.user._id === 1) {
//       return (
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             justifyContent: "flex-end",
//           }}
//         >
//           <Bubble
//             {...props}
//             wrapperStyle={{
//               right: {
//                 backgroundColor: COLORS.primary,
//                 marginRight: 12,
//                 marginVertical: 12,
//               },
//             }}
//             textstyle={{
//               right: {
//                 color: COLORS.white,
//               },
//             }}
//           />
//         </View>
//       );
//     }
//   };

//   // handle input message

//   const submitHandler = () => {
//     const message = {
//       _id: Math.random().toString(36).toString(7),
//       text: inputMessage,
//       createAt: new Date().getTime(),
//       user: { _id: 1 },
//     };
//     setMessages((previousMessage) =>
//       GiftedChat.append(previousMessage, [message])
//     );

//     setInputMessage("");
//   };

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: COLORS.white,
//       }}
//     >
//       {/* Render Header */}
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           paddingHorizontal: 16,
//           paddingVertical: 16,
//           borderColor: COLORS.gray,
//           borderBottomColor: COLORS.gray,
//           borderBottomWidth: 0.8,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             style={{ marginHorizontal: 12 }}
//           >
//             <Image
//               source={icons.back}
//               resizeMode="contain"
//               style={{
//                 height: 24,
//                 width: 24,
//                 tintColor: COLORS.black,
//               }}
//             />
//           </TouchableOpacity>
//           <View>
//             <View
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 right: 4,
//                 width: 10,
//                 height: 10,
//                 borderRadius: 5,
//                 backgroundColor: COLORS.primary,
//                 zIndex: 999,
//                 borderboWidth: 2,
//                 borderColor: COLORS.white,
//               }}
//             />
//             <Image
//               source={images.user1}
//               resizeMode="contain"
//               style={{
//                 height: 48,
//                 width: 48,
//                 borderRadius: 999,
//               }}
//             />
//           </View>
//           <View style={{ marginLeft: 16 }}>
//             <Text
//               style={{
//                 ...FONTS.h4,
//                 color: COLORS.black,
//               }}
//             >
//               Sebana Rudiger
//             </Text>
//             <Text
//               style={{
//                 fontSize: 12,
//                 fontFamily: "regular",
//                 color: COLORS.primary,
//               }}
//             >
//               Online
//             </Text>
//           </View>
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           <TouchableOpacity style={{ marginHorizontal: 16 }}>
//             <Feather name="video" size={24} color={COLORS.gray} />
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           <TouchableOpacity>
//             <Feather name="phone" size={24} color={COLORS.gray} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Render chats */}
//       <GiftedChat
//         messages={messages}
//         renderInputToolbar={() => {
//           return null;
//         }}
//         user={{ _id: 1 }}
//         minInputToolbarHeight={0}
//         renderMessage={renderMessage}
//       />

//       {/* Render Input Bar */}

//       <View style={styles.inputContainer}>
//         <View style={styles.inputMessageContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Type here..."
//             placeholderTextColor={COLORS.black}
//             value={inputMessage}
//             onChangeText={handleInputText}
//           />

//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <TouchableOpacity style={{ marginHorizontal: 8 }}>
//               <Image
//                 source={icons.camera}
//                 resizeMode="contain"
//                 style={{
//                   height: 20,
//                   width: 20,
//                   tintColor: COLORS.gray,
//                 }}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={icons.stickyNote}
//                 resizeMode="contain"
//                 style={{
//                   height: 20,
//                   width: 20,
//                   tintColor: COLORS.gray,
//                 }}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={submitHandler} style={styles.sendButton}>
//               <FontAwesome name="send" size={22} color={COLORS.primary} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   inputContainer: {
//     backgroundColor: COLORS.white,
//     height: 72,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputMessageContainer: {
//     height: 54,
//     width: SIZES.width - 48,
//     flexDirection: "row",
//     justifyContent: "center",
//     backgroundColor: COLORS.secondaryWhite,
//     borderRadius: 16,
//     alignItems: "center",
//     borderColor: "rgba(128,128,128,0.4)",
//     borderWidth: 1,
//   },
//   input: {
//     color: COLORS.black,
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   sendButton: {
//     backgroundColor: COLORS.white,
//     padding: 4,
//     borderRadius: 999,
//     marginHorizontal: 6,
//   },
// });

// export default Chat;
