/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Button } from 'react-native';




type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    //Se define bandera de cargando en verdadero
    this.state =
      {
        index: true,
        marca: true,
        mostrarMns: true,
        ganador: false,
        nomjugUno: '',
        nomjugDos: '',
        contUno: 'X',//True
        contDos: 'O',//False
        msn: '',
        unoA: '',
        unoB: '',
        unoC: '',
        dosA: '',
        dosB: '',
        dosC: '',
        tresA: '',
        tresB: '',
        tresC: ''
      };

    this.btnIniciar = this.btnIniciar.bind(this);
    // this.refunoA = React.createRef();
    // Alert.alert("Incia el Jugador # 1 : "+this.state.nomjugUno);
  };

  clear() {
    this.setState({
      unoA: '',
      unoB: '',
      unoC: '',
      dosA: '',
      dosB: '',
      dosC: '',
      tresA: '',
      tresB: '',
      tresC: '',
      msn: '',
      index: true
    });
  }

  btnCalcuWinner() {

    let unoA = this.state.unoA;
    let unoB = this.state.unoB;
    let unoC = this.state.unoC;

    let dosA = this.state.dosA;
    let dosB = this.state.dosB;
    let dosC = this.state.dosC;

    let tresA = this.state.tresA;
    let tresB = this.state.tresB;
    let tresC = this.state.tresC;

    let contUno = this.state.contUno;
    let contDos = this.state.contDos;

    ///////////////////////////////////////////////Caso X
    //----------------------------------Horizontal
    if (unoA == contUno) {
      if (unoB == contUno) {
        if (unoC == contUno) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugUno);
          this.clear();
        }
      }
    }

    if (dosA == contUno) {
      if (dosB == contUno) {
        if (dosC == contUno) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugUno);
          this.clear();
        }
      }
    }

    if (tresA == contUno) {
      if (tresB == contUno) {
        if (tresC == contUno) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugUno);
          this.clear();
        }
      }
    }

    //---------------------------------Vertical
    if (unoA == contUno) {
      if (dosA == contUno) {
        if (tresA == contUno) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugUno);
          this.clear();
        }
      }
    }

    if (unoB == contUno) {
      if (dosB == contUno) {
        if (tresB == contUno) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugUno);
          this.clear();
        }
      }
    }

    if (unoC == contUno) {
      if (dosC == contUno) {
        if (tresC == contUno) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugUno);
          this.clear();
        }
      }
    }

    //---------------------------------Diagonal
    if (unoA == contUno) {
      if (dosB == contUno) {
        if (tresC == contUno) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugUno);
          this.clear();
        }
      }
    }

    if (unoC == contUno) {
      if (dosB == contUno) {
        if (tresA == contUno) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugUno);
          this.clear();
        }
      }
    }

    ///////////////////////////////////////CASO O
    //----------------------------------Horizontal
    if (unoA == contDos) {
      if (unoB == contDos) {
        if (unoC == contDos) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugDos);
          this.clear();
        }
      }
    }

    if (dosA == contDos) {
      if (dosB == contDos) {
        if (dosC == contDos) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugDos);
          this.clear();
        }
      }
    }

    if (tresA == contDos) {
      if (tresB == contDos) {
        if (tresC == contDos) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugDos);
          this.clear();
        }
      }
    }
    //---------------------------------Vertical
    if (unoA == contDos) {
      if (dosA == contDos) {
        if (tresA == contDos) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugDos);
          this.clear();
        }
      }
    }

    if (unoB == contDos) {
      if (dosB == contDos) {
        if (tresB == contDos) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugDos);
          this.clear();
        }
      }
    }

    if (unoC == contDos) {
      if (dosC == contDos) {
        if (tresC == contDos) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugDos);
          this.clear();
        }
      }
    }

    //---------------------------------Diagonal
    if (unoA == contDos) {
      if (dosB == contDos) {
        if (tresC == contDos) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugDos);
          this.clear();
        }
      }
    }

    if (unoC == contDos) {
      if (dosB == contDos) {
        if (tresA == contDos) {
          Alert.alert("Ganador Jugador: " + this.state.nomjugDos);
          this.clear();
        }
      }
    }

    if(
      unoA != '' && 
      unoB != '' && 
      unoC != '' && 
      dosA != '' && 
      dosB != '' && 
      dosC != '' && 
      tresA != '' && 
      tresB != '' && 
      tresC != '' 
    ){

      Alert.alert("¡Empate!");
      this.clear();
    }    

  };

  btnIniciar(event) {

    if (this.state.nomjugUno == '') {

      this.setState({
        nomjugUno: 'Jugador 1',
      });
    }

    if (this.state.nomjugDos == '') {

      this.setState({
        nomjugDos: 'Jugador 2',
      });
    }

    this.setState({
      index: false
    });
  }

  render() {

    if (this.state.index) {

      if (!this.state.mostrarMns) {
        this.setState(previousState => ({ mostrarMns: !previousState.mostrarMns }));
        console.log("261", this.state.mostrarMns);
      }

      return (
        <View style={styles.container}>
          <View style={styles.colsIndex}>
            <Text style={styles.bigTitle}>BLUE TRIQUI</Text>
          </View>
          <View style={styles.colsIndex}>
            <TextInput
              style={{ height: '100%', width: '100%', flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc', color: 'white' }}
              placeholder="Nombre de jugador # 1"
              onChangeText={(nomjugUno) => this.setState({ nomjugUno })}
            />
          </View>
          <View style={styles.colsIndex}>
            <TextInput
              style={{ height: '100%', width: '100%', flex: 1, marginHorizontal: 10, borderWidth: 1, borderColor: '#ccc', color: 'white' }}
              placeholder="Nombre de jugador # 2"
              onChangeText={(nomjugDos) => this.setState({ nomjugDos })}
            />
          </View>
          <View style={styles.colsIndex}>
            <Button title="Iniciar" style={{ width: 100 }} onPress={this.btnIniciar}></Button>
          </View>
        </View>
      );
    }

    if (this.state.mostrarMns) {
      this.setState(previousState => ({ mostrarMns: !previousState.mostrarMns }));
      Alert.alert("Incia el Jugador # 1 : " + this.state.nomjugUno);
      console.log("293", this.state.mostrarMns);
    }

    this.btnCalcuWinner();

    return (
      <View style={styles.container}>

        <View style={styles.row}>

          <View style={styles.box}>
            <TouchableOpacity disabled={this.state.unoA ? true : false} onPress={() => this.setState(previousState => ({
              marca: !previousState.marca,
              unoA: this.state.marca ? this.state.contUno : this.state.contDos
            }))}>
              <View style={styles.button}>
                <Text style={styles.text}>{this.state.unoA}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity disabled={this.state.unoB ? true : false} onPress={() => this.setState(previousState => ({
              marca: !previousState.marca,
              unoB: this.state.marca ? this.state.contUno : this.state.contDos
            }))}>
              <View style={styles.button}>
                <Text style={styles.text}>{this.state.unoB}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity disabled={this.state.unoC ? true : false} onPress={() => this.setState(previousState => ({
              marca: !previousState.marca,
              unoC: this.state.marca ? this.state.contUno : this.state.contDos
            }))}>
              <View style={styles.button}>
                <Text style={styles.text}>{this.state.unoC}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.row}>

          <View style={styles.box}>
            <TouchableOpacity disabled={this.state.dosA ? true : false} onPress={() => this.setState(previousState => ({
              marca: !previousState.marca,
              dosA: this.state.marca ? this.state.contUno : this.state.contDos
            }))}>
              <View style={styles.button}>
                <Text style={styles.text}>{this.state.dosA}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity disabled={this.state.dosB ? true : false} onPress={() => this.setState(previousState => ({
              marca: !previousState.marca,
              dosB: this.state.marca ? this.state.contUno : this.state.contDos
            }))}>
              <View style={styles.button}>
                <Text style={styles.text}>{this.state.dosB}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity disabled={this.state.dosC ? true : false} onPress={() => this.setState(previousState => ({
              marca: !previousState.marca,
              dosC: this.state.marca ? this.state.contUno : this.state.contDos
            }))}>
              <View style={styles.button}>
                <Text style={styles.text}>{this.state.dosC}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.row}>

          <View style={styles.box}>
            <TouchableOpacity disabled={this.state.tresA ? true : false} onPress={() => this.setState(previousState => ({
              marca: !previousState.marca,
              tresA: this.state.marca ? this.state.contUno : this.state.contDos
            }))}>
              <View style={styles.button}>
                <Text style={styles.text}>{this.state.tresA}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity disabled={this.state.tresB ? true : false} onPress={() => this.setState(previousState => ({
              marca: !previousState.marca,
              tresB: this.state.marca ? this.state.contUno : this.state.contDos
            }))}>
              <View style={styles.button}>
                <Text style={styles.text}>{this.state.tresB}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity disabled={this.state.tresC ? true : false} onPress={() => this.setState(previousState => ({
              marca: !previousState.marca,
              tresC: this.state.marca ? this.state.contUno : this.state.contDos
            }))}>
              <View style={styles.button}>
                <Text style={styles.text}>{this.state.tresC}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ECCFA',
  },
  row: {
    flex: 10,
    flexDirection: 'row'
  },
  box: {
    flex: 33,
    backgroundColor: '#2ECCFA',
    borderColor: 'blue',
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 1
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 150
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    width: '100%'
  },
  colsIndex: {
    flex: 10, justifyContent: "center", alignItems: "center"
  },
  bigTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
