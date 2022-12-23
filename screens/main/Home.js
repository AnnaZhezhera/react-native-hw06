// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import CreatePostScreen from "./CreatePostScreen";
// import ProfileScreen from "./ProfileScreen";
// import PostsScreen from "../main/PostsScreen";
// import MapScreen from "../main/MapScreen";
// import CommentsScreen from "../main/Comments";

// import GridIcon from "../../assets/images/grid.svg";
// import NewIcon from "../../assets/images/new.svg";
// import UserIcon from "../../assets/images/user.svg";

// const HomeTabs = createBottomTabNavigator();
// const HomeStack = createStackNavigator();

// const Home = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         options={{ headerShown: false }}
//         name="Home"
//         component={HomeTabsBtn}
//       />
//       <HomeStack.Screen
//         options={{ headerShown: false }}
//         name="CommentsScreen"
//         component={CommentsScreen}
//       />
//       <HomeStack.Screen
//         options={{ headerShown: false }}
//         name="MapScreen"
//         component={MapScreen}
//       />
//     </HomeStack.Navigator>
//   );
// };

// export const HomeTabsBtn = () => {
//   return (
//     <HomeTabs.Navigator tabBarOptions={{ showLabel: false }}>
//       <HomeTabs.Screen
//         name="Posts"
//         component={PostsScreen}
//         options={{
//           tabBarIcon: () => <GridIcon width={40} height={40} />,
//           headerShown: false,
//         }}
//       />
//       <HomeTabs.Screen
//         name="CreatePostScreen"
//         component={CreatePostScreen}
//         options={{
//           tabBarStyle: { display: "none" },
//           tabBarVisible: false,
//           tabBarIcon: () => <NewIcon width={70} height={40} />,
//           headerShown: false,
//         }}
//       />
//       <HomeTabs.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: () => <UserIcon width={40} height={40} />,
//           headerShown: false,
//         }}
//       />
//     </HomeTabs.Navigator>
//   );
// };

// export default Home;
