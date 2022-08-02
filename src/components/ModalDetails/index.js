import React from 'react';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Feather';

import { Container, BackButton, Title, SubTitle, ContainerCard, Card,Temp, Split, Detail, DetailText} from './styles';

export default function ModalDetails({setVisible, data}) {
 
  const unixTimestamp = data.dt
  const date = new Date(unixTimestamp*1000);
  const days =['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabado'];
  const week = days[new Date(date).getDay()];

  return (
  
  <Container>

       <BackButton onPress={setVisible}>
        <Icon name="times" size={25} color='#FFF'/>
       </BackButton>

      <Title>{data.name}</Title>
      <SubTitle>{week}</SubTitle>

    <ContainerCard>
      <Card>
        <Temp>Manhã</Temp>
        <Temp>{parseInt(data.morn)}°</Temp>
      </Card>
      <Split></Split>
      <Card>
        <Temp>Tarde</Temp>
        <Temp>{parseInt(data.tempDay)}°</Temp>
      </Card>
      <Split></Split>
      <Card>
        <Temp>Noite</Temp>
        <Temp>{parseInt(data.night)}°</Temp>
      </Card>


    </ContainerCard>

    <Detail>
      <DetailText>
      Nascer do Sol <Icon1 name="sunrise" size={25} color='#000'/>
      </DetailText>
      <DetailText>{format(new Date(data.sunrise*1000),'HH:mm')}</DetailText>
    </Detail>
 
    <Detail>
      <DetailText>
      Pôr do Sol <Icon1 name="sunset" size={25} color='#000'/>
      </DetailText>
      <DetailText>{format(new Date(data.sunset*1000),'HH:mm')}</DetailText>
    </Detail>

    <Detail>
      <DetailText>
       Umidade do Ar <Icon name="tint" size={25} color='#000'/>
      </DetailText>
      <DetailText>{parseInt(data.humi)} %</DetailText>
    </Detail>

    <Detail>
      <DetailText>
       Vento <Icon1 name="wind" size={25} color='#000'/>
      </DetailText>
      <DetailText>{parseInt(data.wind)} KM/H</DetailText>
    </Detail> 
  </Container>
  );
}
