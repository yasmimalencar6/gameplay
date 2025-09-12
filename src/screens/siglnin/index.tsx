import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export function SigInin() {
  
  const [Text,SetText] = useState("sem nada")
  return (
    <View style={styles.container}>
      <Text> testar </Text>
      <Text> ei louco ta ai :</Text>
      <TextInput onChangeText={SetText} style={{width:200,height:50,borderWidth:2}}/>
      <Text>Esse é show: {Text}</Text>
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
