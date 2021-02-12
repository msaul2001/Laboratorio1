import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, CheckBox, TouchableOpacity } from 'react-native';

export default function App() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      
        <Image
          style={styles.imagen}
          source={require('./assets/BAC.png')}
        />
      
      
      <TextInput 
        placeholder="Usuario"
        style={styles.inputC}
      />
      <TextInput 
      style={styles.inputC}
        placeholder="Contraseña"
      />
      <Text style={styles.textControl}> ¿Olvidó su contraseña? </Text>
      
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkboxC}
      />

      <Text style={styles.bac}> BAC </Text>
      <Text style={styles.token}> Token </Text>

      <TouchableOpacity style ={styles.boton}>
        <Text style={styles.textoBoton}> Ingresar </Text>
      </TouchableOpacity>

      <Text style={styles.primerV}> ¿Primera vez que ingresa? </Text>
      <Text style={styles.textControl1}> Crear usuario </Text>
      <Text style={styles.textControl}> Tipo de Cambio > </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imagen:{
    marginTop: 68,
    marginBottom: 50,
    height: 125,
    width: '100%',
  },
  inputC: {
    width: '85%',
    height: 65,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    fontSize: 18
  },
  textControl: {
    fontSize: 15,
    color: '#00AAE4',
    fontWeight: 'bold',
    marginLeft: 160,
    marginTop: 40,
  },
  checkboxC: {
    alignSelf: "center",
    backgroundColor: '#E6E6E6',
    borderBottomColor: '#aaa',
    marginTop: 25,
    marginRight: 300,
  },
  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: '85%',
    backgroundColor : "#4BB543",
    marginLeft :50,
    marginRight:50,
    marginTop :40,
    backgroundColor : "#828282",
  },
  textoBoton:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  primerV: {
    fontSize: 15,
    color: '#86694a',
    marginRight: 98,
    marginTop: 30,
    fontWeight: "600",
  },
  textControl1: {
    fontSize: 15,
    color: '#00AAE4',
    fontWeight: 'bold',
    marginLeft: 200,
    marginTop: -20,
  },
  bac: {
    color: '#E50027',
    fontWeight: 'bold',
    marginTop: -18,
    marginRight: 240,
  }, 
  token: {
    color: '#757575',
    fontWeight: 'bold',
    marginTop: -20,
    marginRight: 165,
  }
});