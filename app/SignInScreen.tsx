import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '@/components/Background';
import Logo from '@/components/Logo';
import Header from '@/components/Header';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import BackButton from '@/components/BackButton';
import { theme } from '@/components/theme';
import { emailValidator, passwordValidator } from '@/helpers/validator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getAsyncStorageValue } from '@/utils/localStorage';
import { LOCALSTORAGE } from '@/constants/sotrage.constant';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

export default function SignInScreen({ navigation }: Props) {
  const [credentials, setCredentials] = useState({
    email: { value: '', error: '' },
    password: { value: '', error: '' },
  });

  const handleChange = (field: 'email' | 'password', value: string) => {
    setCredentials((prev) => ({
      ...prev,
      [field]: { value, error: '' },
    }));
  };

  const onLoginPressed = async () => {
    const emailError = emailValidator(credentials.email.value);
    const passwordError = passwordValidator(credentials.password.value);

    if (emailError || passwordError) {
      setCredentials((prev) => ({
        email: { ...prev.email, error: emailError },
        password: { ...prev.password, error: passwordError },
      }));
      return;
    }

    const storedUser = await getAsyncStorageValue(
      LOCALSTORAGE.LOGGED_IN_USER,
      true
    );
    
    const { email: userEmail, password: userPassword } = storedUser || {};

    if (
      credentials.email.value === userEmail &&
      credentials.password.value === userPassword
    ) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    } else {
      alert('Please provide correct credentials');
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Good to See You Again!</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={credentials.email.value}
        onChangeText={(text: string) => handleChange('email', text)}
        error={!!credentials.email.error}
        errorText={credentials.email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description={'Please enter your email'}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={credentials.password.value}
        onChangeText={(text: string) => handleChange('password', text)}
        error={!!credentials.password.error}
        errorText={credentials.password.error}
        secureTextEntry
        description={'Please enter your password'}
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={onLoginPressed}>
        Sign In
      </Button>

      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
