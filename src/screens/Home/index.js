import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style';

export default function HomePaciente({ navigation }) {
  const HomeP = () => {
    navigation.navigate('HomeP'); 
  };

  const GetP = () => {
    navigation.navigate('GetP'); // Substitua 'Another_Screen' pelo nome da tela para a qual você deseja navegar
  };

  const Delete = () => {
    navigation.navigate('Delete'); // Substitua 'Different_Screen' pelo nome da tela para a qual você deseja navegar
  };

  return (
    <View style={styles.container}>
      {/* Imagem */}
      <Image
        source={require('../../Img/Hospital.png')}
        style={styles.image}
      />

      {/* Botão para navegar para a tela 'HomeP' */}
      <TouchableOpacity style={styles.button} onPress={HomeP}>
        <Text style={styles.buttonText}>Paciente</Text>
      </TouchableOpacity>

      {/* Botão para navegar para outra tela */}
      <TouchableOpacity style={styles.button} onPress={''}>
        <Text style={styles.buttonText}>Em breve</Text>
      </TouchableOpacity>

      {/* Botão para navegar para uma tela diferente */}
      <TouchableOpacity style={styles.button} onPress={""}>
        <Text style={styles.buttonText}>????</Text>
      </TouchableOpacity>
    </View>
  );
};
