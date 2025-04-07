import React from 'react';
import { Button, Alert } from 'react-native';

const Button2 = () => (
<Button
title="Pressione-me"
onPress={() => Alert.alert('Bot o pressionado!')}
/>
);

export default Button2;