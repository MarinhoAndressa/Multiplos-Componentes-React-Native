import React, { useState } from 'react';
import { Modal2, Text, View, Button } from 'react-native';
 
const Modal2 = () => {
const [visible, setVisible] = useState(false);
return (
<View>
<Button title="Abrir Modal" onPress={() => setVisible(true)} />
<Modal2 visible={visible} transparent>
<View style={{ flex:1, justifyContent:'center', alignItems:'center'
}}>
<Text>Conte do do Modal</Text>
<Button title="Fechar" onPress={() => setVisible(false)} />
</View>
</Modal2>
</View>
);
};
 
export default Modal2;