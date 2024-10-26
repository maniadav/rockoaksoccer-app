import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '@/components/theme';
import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from '@/helpers/validator';
import {
  setAsyncStorageValue,
  getAsyncStorageValue,
} from '@/utils/localStorage'; // Import your localStorage functions
import { LOCALSTORAGE } from '@/constants/sotrage.constant';

const SignUpScreen = ({ navigation }: any) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onSignUpPressed = async () => {
    const nameError = usernameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    // Check if email or username already exists in local storage
    const existingUser = await getAsyncStorageValue(
      LOCALSTORAGE.LOGGED_IN_USER,
      true
    );

    if (existingUser) {
      const { email: storedEmail, username: storedUsername } = existingUser;
      if (storedEmail === email.value || storedUsername === name.value) {
        Alert.alert('Error', 'Username or email already in use');
        return;
      }
    }

    try {
      await setAsyncStorageValue(
        LOCALSTORAGE.LOGGED_IN_USER,
        {
          username: name.value,
          email: email.value,
          password: password.value,
        },
        true
      );

      Alert.alert('Success', 'Your account has been created successfully!');
      navigation.replace('SignInScreen');
    } catch (error) {
      Alert.alert('Error', 'Failed to save your account. Please try again.');
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Join the Journey to Greatness!</Header>

      <TextInput
        label="Username"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text: string) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignInScreen')}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default SignUpScreen;
