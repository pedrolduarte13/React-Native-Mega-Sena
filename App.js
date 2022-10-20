import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Mega from './src/components/Mega'

export default function App() {
  return (
    <View style={styles.container}>
      <Mega qtdeNums={12}/>
      <StatusBar style="auto" />
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
