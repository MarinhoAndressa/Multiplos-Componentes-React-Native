import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import Button2 from './Button2';
import FlatList2 from './FlatList2';
import Image2 from './Image2';
import Index2 from './index2';
import Modal2 from './Modal2';
import SafeAreaView2 from './SafeAreaView2';
import ScrollView2 from './ScrollView2';
import Text2 from './Text2';
import TextInput2 from './TextInput2';
import TouchableOpacity2 from './TouchableOpacity2';
import View2 from './View2';
import { SafeAreaView2, ScrollView2, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    <Button2></Button2>
    <FlatList2></FlatList2>
    <Image2></Image2>
    <Index2></Index2>
    <Modal2></Modal2>
    <SafeAreaView2></SafeAreaView2>
    <ScrollView2></ScrollView2>
    <Text2></Text2>
    <TextInput2></TextInput2>
    <Touchable2></Touchable2>
    <View2></View2>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
