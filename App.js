import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';

const data = [
  { name: 'Chasca', id: '00000012345', image: require('./assets/Chasca.jpg') },
  { name: 'Citlali', id: '00000054321', image: require('./assets/Citlali.png') },
  { name: 'Growtopia', id: '00000023456', image: require('./assets/gt.png') },
  { name: 'Crystal Realms', id: '00000065432', image: require('./assets/cr.png') },
  { name: 'Engkong', id: '00000034567', image: require('./assets/Citlali.png') },
  { name: 'Engkong', id: '00000076543', image: require('./assets/Citlali.png') }
];

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={[styles.scrollView, styles.contentContainer]}>
          <Text>{item.name} - {item.id}</Text>
          <Image source={item.image} style={styles.image} />
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,
  }
});
