import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function TextButton(props) 
{
  return <Text style={{ color: "white" }}>{props.title}</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Hello World</Text>
      <StatusBar style="dark" />
      <TextButton title="Olá Mundo 1" />
      <TextButton title="Olá Mundo 2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: "blue"
  }
});
