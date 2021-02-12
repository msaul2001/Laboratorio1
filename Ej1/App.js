import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput,
  Picker, Button, Alert, Modal} from 'react-native';

  const createAlert = (monto, convertido, conversion) =>
  Alert.alert(conversion, monto + " " + conversion + " " + convertido,
  [
    {
      text:'Cancelar',
      style: "cancel",
      onPress:() => {
        console.log("El usuario cancelo");
      }
    },
    {
      text:'Aceptar',
      style: "cancel",
      onPress:() => {
        console.log("El usuario acepto");
      }
    }
  ],
  {cancelable:false}
  );

//Funcion para conversion 
  const operarConversion = (grados, conversion) =>{
    let resultado = 0.0;
             console.log("TextInput: " + grados + ". Conversion: " + conversion);
             if(conversion == 'C -> F'){
               resultado = parseFloat(grados * 5/9) + 32
             }else if(conversion == 'F -> C'){
                resultado = parseFloat(grados - 32) * 5/9
             }
             resultado = resultado.toFixed(2);
             console.log(grados + " " + conversion + " " + resultado);
             createAlert(grados, resultado, conversion);
  }

export default function App() {
  const [grados,setMonto] = useState('');
  const [conversion, setConversion] = useState('');
  const [modal, setModal] = useState(false);
  const [factor, setFactor] = useState(1);

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
      >
        <View style={styles.miModalExterno}>
          <View style={styles.miModalInterno}>
            <TextInput
              placeholder="Factor de Conversion"
              style={styles.inputControl}
              onChangeText= {(entradaF) => {
                setFactor(entradaF);
              }}
            />

            <Text> Hola desde el modal </Text>
            <Button title="Cerrar" 
            onPress={() => {setModal(!modal)}}/>
          </View>
        </View>
      </Modal>

      <TextInput
        placeholder='Ingrese la Temperatura'
        style={styles.inputControl}
        onChangeText={(entrada) => {
          setMonto(entrada);
          console.log("Monto: " + grados)
        }}/>

        <Picker
          selectedValue={conversion}
          style={styles.conversionPiker}
          onValueChange = {(itemValue, itemIndex) => {
            setConversion(itemValue);
            console.log("Conversion" + itemValue);
          }}
        >
          <Picker.Item label="C -> F" value="C -> F"/>
          <Picker.Item label="F -> C" value="F -> C"/>
        </Picker>

        <Button
          title="Convertir"
          onPress = { () => operarConversion(grados, conversion)}
        />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  miModalExterno:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },

  miModalInterno: {
    height: 300,
    width: 300,
    backgroundColor: 'white',
    borderRadius:0.5
  },

  conversionPiker:{
    width: '80%',
    height:60,
    fontSize:30,
    color:'white',
  },
  inputControl:{
    width: '85%',
    height:40,
    backgroundColor:'#eee',
    borderBottomColor: '#aaa',
    borderBottomWidth: 2
  },
  container: {
    flex: 1,
    backgroundColor: '#308795',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

