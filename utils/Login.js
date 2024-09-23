// Login page component//

import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const LoginPage = ( onLogin ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }
    onLogin(username, password);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginPage;