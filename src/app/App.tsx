import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./RootStack";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SCREENS from "@constants/screen.constant";
import Loader from "@components/common/Loader";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";

export default function App() {
  const [initialRoute, setInitialRoute] = React.useState<string | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedUser = await getAsyncStorageValue(
        LOCALSTORAGE.LOGGED_IN_USER,
        true
      );
      const { email } = storedUser || {};
      console.log({ storedUser }, storedUser.email);
      const initialScreen = email ? SCREENS.main : SCREENS.onBoarding;
      setInitialRoute(initialScreen);
    };

    checkLoginStatus();
  }, []);

  if (!initialRoute) return <Loader />;

  return (
    <NavigationContainer>
      <RootStack initialRoute={initialRoute} />
    </NavigationContainer>
  );
}
