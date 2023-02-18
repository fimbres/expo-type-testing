import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/types';

const NotFoundScreen: FC<NativeStackScreenProps<RootStackParamList, "NotFound">> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This product doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
