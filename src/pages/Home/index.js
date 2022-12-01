import React, { useState, useEffect } from 'react';
import {View, ActivityIndicator, StatusBar, Modal, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import api from '../../services/api';
import { API_KEY } from "@env";
import Icon from 'react-native-vector-icons/FontAwesome';
import ListDays from '../../components/ListDays';
import ModalSearch from '../../components/ModalSearch';


import { Container, Background, ViewTitle, Title, ViewSearch, Temp, Description, ViewTemp, Temperatures, NextDays, Split, ViewFlatList, List, ContainerLoading} from './styles';


export default function Home() {

  // const latitude =- 23.54963240761371;
  // const longitude = -46.64029664169944;
  const [weatherCurrent, setWeatherCurrent] = useState(false);
  const [weatherDays, setWeatherDays] = useState(false);
  const [temperature, setTemperature] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false)
  const temps = [];
  const data = [];

  useEffect(() => {

    myLocation()

  }, [])

  async function myLocation() {
     
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Permissão de Acesso à Localização",
        message: "Este aplicativo precisa acessar sua localização.",
    
        buttonNegative: "Cancelar",
        buttonPositive: "OK"
      }
    );
  
      Geolocation.getCurrentPosition((location) => {
  
        getWeather(location.coords.latitude, location.coords.longitude)
  
      }, (error) => { console.log(error)})
    
  }
  

  let getWeather = async (l, lon) => {
    let res = await api.get(`data/2.5/weather?lat=${l}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt`)
    let res1 = await api.get(`data/2.5/onecall?lat=${l}&lon=${lon}&exclude=current,minutely,hourly&appid=${API_KEY}&lang=pt&units=metric`)
 
    let minAtual = res1.data.daily[0].temp.min;
    let maxAtual = res1.data.daily[0].temp.max; 
    
    temps.push({min: minAtual, max: maxAtual})
    
    for (var i = 1; i < res1.data.daily.length; i++) {

      let dt = res1.data.daily[i].dt
      let tempDay = res1.data.daily[i].temp.day
      let tempMin = res1.data.daily[i].temp.min
      let tempMax = res1.data.daily[i].temp.max
      let morn = res1.data.daily[i].temp.morn
      let night = res1.data.daily[i].temp.night
      let des = res1.data.daily[i].weather[0].description
      let cod = res1.data.daily[i].weather[0].id
      let name = res.data.name
      let umi = res1.data.daily[i].humidity
      let wind = res1.data.daily[i].wind_speed
      let sunrise = res1.data.daily[i].sunrise
      let sunset = res1.data.daily[i].sunset

      data.push({
        key: i,
        dt: dt,
        tempDay: tempDay,
        tempMin: tempMin,
        tempMax: tempMax,
        morn: morn,
        night: night,
        description: des,
        cod: cod,
        name: name,
        humi: umi,
        wind: wind,
        sunrise: sunrise,
        sunset: sunset
      })
    }
     
    setTemperature(temps)
    setWeatherCurrent(res.data)
    setWeatherDays(data)

  }

  if (!weatherDays) {
    return (
      <ContainerLoading>
        <ActivityIndicator color="#000" size={45} />
      </ContainerLoading>
    )
  } else {

    return (

    <Container>
       <StatusBar backgroundColor="transparent"  translucent={true} barStyle="light-content"/>
      <Background source={require('../../assets/clouds.jpg')}  resizeMode='cover'>
    
      <ViewSearch onPress={()=>setVisibleModal(true)}>
        <Icon name ='search' size={28} color='#000'/>
      </ViewSearch> 
    
      <ViewTitle>
     
            <Title>{weatherCurrent.name}</Title>
            <Temp>{parseInt(weatherCurrent.main.temp)}°</Temp>
            <Description>{weatherCurrent.weather[0].description}</Description>
          <ViewTemp>
            <Temperatures>Min: {parseInt(temperature[0].min)}°</Temperatures>
            <Temperatures>Max: {parseInt(temperature[0].max)}°</Temperatures>
          </ViewTemp>
        
       </ViewTitle>
         
          <NextDays>Próximos dias</NextDays>
          <Split></Split>
        
          <ViewFlatList>
          <List
            horizontal={true}
            showsVerticalScrollIndicator={false}
            data={weatherDays}
            keyExtractor={ item => item.key}
            renderItem={ ({ item }) => ( <ListDays data={item}/> )}
            />
        </ViewFlatList>

        <Modal transparent={true} animationType='slide' visible={visibleModal}>
          <ModalSearch data={data} setVisible={() => {setVisibleModal(false)}}/>
       </Modal>
        </Background>

        </Container>
    );
  }
}



