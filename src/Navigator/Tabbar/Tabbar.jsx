// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import tabbarcss from './tabbarcss';
// import HomeScreen from '../Stack/HomeStack/HomeScreen';
// import CatalogScreen from '../Stack/CatalogStack/CatalogScreen';
// import CartScreen from '../Stack/CartStack/CartScreen';
// import ProfileScreen from '../Stack/ProfileStack/ProfileScreen';
// import HomeIcon from '../../assets/icon/home-2-outlin.svg';
// import CatalogIcon from '../../assets/icon/bag.svg';
// import CartIcon from '../../assets/icon/card-pos.svg';
// import ProfileIcon from '../../assets/icon/user.svg';

// const Tab = createBottomTabNavigator();

// const Tabbar = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarStyle: {
//           height: 70,
//           shadowOffset: {
//             width: 0,
//             height: 0,
//           },
//         },
//         tabBarIcon: ({ color, size, focused }) => {
//             let IconComponent;
  
//             if (route.name === 'HomeScreen') {
//               IconComponent = HomeIcon;
//             } else if (route.name === 'CatalogScreen') {
//               IconComponent = CatalogIcon;
//             } else if (route.name === 'CartScreen') {
//               IconComponent = CartIcon;
//             } else if (route.name === 'ProfileScreen') {
//               IconComponent = ProfileIcon;
//             }
  
//               return <IconComponent color={focused ? "#306B60" : "gray"} size={35} />;
//           },
//           tabBarShowLabel: false,
//       })}
//     >
//       <Tab.Screen name="HomeScreen" component={HomeScreen} />
//       <Tab.Screen name="CatalogScreen" component={CatalogScreen} />
//       <Tab.Screen name="CartScreen" component={CartScreen} />
//       <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// export default Tabbar;