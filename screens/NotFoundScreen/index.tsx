import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation/types";
import {
  AppButton,
  SafeAreaContainer,
  ScreenFooter,
  ScreenHeader,
} from "../../components";
import { Colors } from "../../constants";

const NotFoundScreen: FC<
  NativeStackScreenProps<RootStackParamList, "NotFound">
> = ({ navigation }) => {
  return (
    <>
      <SafeAreaContainer style={styles.statusBar} />
      <SafeAreaContainer style={{ paddingTop: 0 }}>
        <View style={styles.container}>
          <ScreenHeader
            title="Lo Sentimos!"
            subtitle="El producto que seleccionaste no existe"
            style={styles.header}
          />
          <ScreenFooter style={styles.footer}>
            <AppButton
              title="Volver a Inicio"
              size="lg"
              onPress={() =>
                navigation.navigate("Home", { initialFilter: "all" })
              }
            />
          </ScreenFooter>
        </View>
      </SafeAreaContainer>
    </>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  statusBar: {
    flex: 0,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    paddingTop: 66,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: Colors.black,
    backgroundColor: Colors.white,
  },
  footer: {
    padding: 20,
  },
});
