import * as React from "react";
import RootNavigation from "./RootStack";
import { useEffect, useState } from "react";
import SCREENS from "@constants/screen.constant";
import Loader from "@components/common/Loader";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";

export default function App() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedUser = await getAsyncStorageValue(
          LOCALSTORAGE.LOGGED_IN_USER,
          true
        );
        const { email } = storedUser || {};
        const initialScreen = email ? SCREENS.main : SCREENS.onBoarding;
        setInitialRoute(initialScreen);
      } catch (error) {
        console.error("Error fetching async storage value:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <RootNavigation initialRoute={initialRoute} />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
