import React, {useState} from 'react';
import { Keyboard, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { API_KEY } from "@env";
import { format } from 'date-fns';
import { Container, ButtonExit, ViewInput, Input, ButtonSearch, ViewResult, Title} from './styles';
import { Card, ContainerCard, Detail, DetailText, Split, SubTitle, Temp } from '../ModalDetails/styles';

export default function ModalSearch({setVisible}) {
const [input, setInput] = useState('');
const [nameCity, setNameCity] = useState(false);
const [weather, setWeather] = useState(false);

 async function handleSearch(){
    if(input === '') return;
    try{
    
      let res = await api.get(`data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric&lang=pt`)     
          
    let lat = res.data.coord.lat;
    let lon = res.data.coord.lon;

    let res1 = await api.get(`data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${API_KEY}&lang=pt&units=metric`)
   
    setNameCity(res.data.name);
    setWeather(res1.data.daily[0]);
    Keyboard.dismiss();

    }catch(erro){
          setNameCity(false);
          setWeather(false);
          Keyboard.dismiss();
          Alert.alert('Atenção','Confira se o nome da cidade está correto e tente novamente!')
          console.log('erro',erro)
          return;
    }

}

 
return (
    <Container>
   
      <ButtonExit onPress={setVisible}>
        <Icon name="times" size={25} color='#D6E4FF'/>
       </ButtonExit>
     
      <ViewInput>
         <Input
         placeholder="Buscar Cidade ...."
         value={input}
         onChangeText={ (text) => setInput(text) }
         placeholderTextColor="#353840"
        />
        <ButtonSearch onPress={handleSearch}>
          <Icon name="search" size={25} color='#D6E4FF'/>
        </ButtonSearch>
       
       </ViewInput>
       { weather && 
        <ViewResult>
          <Title>{nameCity}</Title>
          <SubTitle>Hoje</SubTitle>

          <ContainerCard>
           <Card>
             <Temp>Manhã</Temp>
             <Temp>{parseInt(weather.temp.morn)}°</Temp>
           </Card>
           
           <Split></Split>
           
           <Card>
             <Temp>Tarde</Temp>
             <Temp>{parseInt(weather.temp.day)}°</Temp>
           </Card>
           <Split></Split>
           <Card>
             <Temp>Noite</Temp>
             <Temp>{parseInt(weather.temp.night)}°</Temp>
           </Card>
          </ContainerCard>
          
          <Detail>
            <DetailText>Nascer do Sol <Icon1 name="sunrise" size={25} color='#000'/></DetailText>
            <DetailText>{format(new Date(weather.sunrise*1000),'HH:mm')}</DetailText>
          </Detail>

          <Detail>
            <DetailText>Pôr do Sol <Icon1 name="sunset" size={25} color='#000'/></DetailText>
            <DetailText>{format(new Date(weather.sunset*1000),'HH:mm')}</DetailText>
          </Detail>
            
          <Detail>
            <DetailText>Umidade do Ar <Icon name="tint" size={25} color='#000'/></DetailText>
            <DetailText>{parseInt(weather.humidity)} %</DetailText>
          </Detail>
            
          <Detail>
            <DetailText> Vento <Icon1 name="wind" size={25} color='#000'/></DetailText>
            <DetailText>{parseInt(weather.wind_speed)} KM/H</DetailText>
          </Detail>
          
          
        </ViewResult>
                   
       }

    </Container>
  );
}

