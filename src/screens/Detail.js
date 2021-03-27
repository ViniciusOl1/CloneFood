import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default function Detail({navigation}) {
  const [quantity, setQuantity] = useState(1);

  function addQuantity() {
    setQuantity(quantity + 1);
  }
  function subtractQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <View style={{backgroundColor: '#FFF'}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 40,
            marginHorizontal: 20,
          }}>
          <View style={{width: '10%'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../images/2.png')} />
            </TouchableOpacity>
          </View>
          <View style={{width: '80%', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../images/3.png')}
                style={{height: 25, width: 20}}
              />
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                290 Calorias
              </Text>
            </View>
          </View>
          <View style={{width: '10%'}}>
            <Icon name="heart" color="#f9dd7a" size={30} />
          </View>
        </View>
        <Image
          source={require('../images/5.png')}
          style={{
            height: 300,
            width: 300,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: 'f6f3fb',
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={addQuantity}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              +
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingHorizontal: 20,
            }}>
            {quantity}
          </Text>
          <TouchableOpacity onPress={subtractQuantity}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            marginTop: 30
        }}>
            <View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 25
                }}>
                    SmokeHouse
                </Text>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#a4a4a9"
                }}>
                    Beef Burger
                </Text>
            </View>
            <Text style={{
                fontWeight: "bold",
                fontSize: 28,
                marginLeft: 70
            }}>R$ 12,99</Text>
        </View>
        <Text style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20
        }}>
            Ingredientes
        </Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20, marginHorizontal: 20, alignSelf: "center"}}
        >
            <View style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 1,
                paddingVertical: 8,
                marginRight: 10
            }}>
                <Image
                    source={require("../images/11.png")}
                    style={{ height: 30, width: 30}}
                />
            </View>
            <View style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 1,
                paddingVertical: 8,
                marginRight: 10
            }}>
                <Image
                    source={require("../images/13.png")}
                    style={{ height: 30, width: 30}}
                />
            </View>
            <View style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 1,
                paddingVertical: 8,
                marginRight: 10
            }}>
                <Image
                    source={require("../images/8.png")}
                    style={{ height: 30, width: 30}}
                />
            </View>
            <View style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 1,
                paddingVertical: 8,
                marginRight: 10
            }}>
                <Image
                    source={require("../images/12.png")}
                    style={{ height: 30, width: 30}}
                />
            </View>
            <View style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 1,
                paddingVertical: 8,
                marginRight: 10
            }}>
                <Image
                    source={require("../images/bl.png")}
                    style={{ height: 30, width: 30}}
                />
            </View>
            
            <View style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 1,
                paddingVertical: 8,
                marginRight: 10
            }}>
                <Image
                    source={require("../images/7.png")}
                    style={{ height: 30, width: 30}}
                />
            </View>
        </ScrollView>
        <Text style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20
        }}>
            Detalhes
        </Text>
        <Text style={{
            color: "#a4a4a9",
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 10,
            marginHorizontal: 20,
            textAlign: "justify"
        }}>
            Et tempor ipsum ex ex do proident dolore sunt excepteur voluptate. Adipisicing exercitation id in et aute officia commodo duis est. Exercitation officia elit sint minim mollit voluptate.
        </Text>
      </ScrollView>
      <View style={{
          position: "absolute",
          backgroundColor: "#000",
          height: 50,
          width: 50,
          bottom: 20,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 25
      }}>
          <Icon 
            name="shopping-cart"
            size={24}
            color="#FFF"
          />
      </View>
    </View>
  );
}
