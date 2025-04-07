import React, { useState } from 'react';
import { TextInput2, View } from 'react-native';

const TextInput2 = () => {
const [value, setValue] = useState('');
return (
<View>
<TextInput2
placeholder="Digite algo"
onChangeText={setValue}
value={value}
style={{ borderWidth: 1, padding: 8 }}
/>
</View>
);
};

export default TextInput2;