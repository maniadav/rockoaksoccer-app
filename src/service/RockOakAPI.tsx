// api/RockOakApi.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_ENDPOINT } from "@constants/api.constant";
import {
  CountryFilterType,
  LanguageFilterType,
} from "@constants/config.constant";
import { LOCALSTORAGE } from "@constants/storage.constant";
import SCREENS from "@constants/screen.constant";

// React Native doesn't need 'use client' directive
// Removed Next.js specific imports

class RockOakApi {
  private static instance: AxiosInstance;
  private static navigation: any; // Store navigation reference

  static initialize(navigation: any) {
    this.navigation = navigation;
  }

  static Filter = {
    CountryFilter: "IND" as CountryFilterType,
    LanguageFilter: "EN" as LanguageFilterType,
  };

  static BASE_URL: string = process.env.EXPO_PUBLIC_BACKEND_SERVER_DOMAIN || "";
  static API_KEY: string = process.env.EXPO_PUBLIC_WEB_API_KEY || "";

  static HEADERS = {
    "Content-Type": "application/json",
  };

  static getInstance(): AxiosInstance {
    if (!this.instance) {
      this.instance = this.createInstance();
    }
    return this.instance;
  }

  protected static createInstance(): AxiosInstance {
    const instance = axios.create({
      baseURL: this.BASE_URL,
      timeout: 40000,
      headers: this.HEADERS,
    });

    instance.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        const API_KEY = this.API_KEY || "";
        const access_token = await AsyncStorage.getItem("MFA_ACCESS_TOKEN");
        const userString = await AsyncStorage.getItem("LOGGED_IN_USER");
        const user = userString ? JSON.parse(userString) : null;

        const headers = {
          ...config.headers,
          ...(access_token
            ? { "x-access-token": access_token }
            : { apikey: API_KEY }),
        };

        return {
          ...config,
          headers: headers as any,
        } as InternalAxiosRequestConfig;
      },
      (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { config, response } = error;

        if (!response) return Promise.reject(error);

        switch (response.status) {
          case 401:
            await this.handleUnauthorized();
            break;
          case 498:
            if (config && !config._retry) {
              config._retry = true;
              return this.handleTokenRefresh(config);
            }
            break;
        }

        return Promise.reject(error);
      }
    );

    return instance;
  }

  private static async handleUnauthorized() {
    await AsyncStorage.multiRemove([
      LOCALSTORAGE.LOGGED_IN_USER,
      LOCALSTORAGE.MFA_ACCESS_TOKEN,
    ]);

    if (this.navigation) {
      this.navigation.navigate(SCREENS.signIn);
    }
  }

  private static async handleTokenRefresh(config: AxiosRequestConfig) {
    try {
      const userString = await AsyncStorage.getItem("LOGGED_IN_USER");
      const user: any = userString ? JSON.parse(userString) : null;
      const rottencookie = await AsyncStorage.getItem("REFRESH_ACCESS_TOKEN");

      const response = await axios.post(
        `${this.BASE_URL}${API_ENDPOINT.auth.getAccessToken}`,
        { username: user?.username },
        {
          headers: { rottencookie },
        }
      );

      if (response.data.accessToken) {
        await AsyncStorage.setItem(
          "MFA_ACCESS_TOKEN",
          response.data.accessToken
        );
        config.headers = {
          ...config.headers,
          "x-access-token": response.data.accessToken,
        };
        return axios(config);
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      await this.handleUnauthorized();
    }
    return Promise.reject(config);
  }
}

export default RockOakApi;
