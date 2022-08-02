import React,{useState} from 'react';
import { Modal} from 'react-native';
import Icon2 from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalDetails from '../ModalDetails';
import { ButtonContent, Container, Title, TitleText, ViewTemp, TempDay, MinText, MaxText, TempText } from './styles';


export default function List({data}) {
   const unixTimestamp = data.dt
   const date = new Date(unixTimestamp*1000);

   const days =['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];

   const week = days[new Date(date).getDay()];
   
   const [visibleModal, setVisibleModal] = useState(false)

   const Icon1 = ()=>{
    if(data.cod === 800){
      return(     <Icon name='sun' color="#ffff00" size={30} style={{marginBottom:10}}/>)
    }
    else if(data.cod=== 801 ||data.cod === 802 || data.cod === 803 || data.cod === 804){
      return(     <Icon2 name='cloud' color="#FFF" size={30} style={{marginBottom:10}}/>)
    }
    else if(data.cod === 200 || data.cod === 201 || data.cod === 202 || data.cod === 210 || data.cod === 211 || data.cod === 212 || data.cod === 221 || data.cod === 230 || data.cod === 231 || data.cod === 232){
      return(     <Icon2 name='cloud-lightning' color="#FFF" size={30} style={{marginBottom:10}}/>)
    }
    else if(data.cod === 300 || data.cod === 301 || data.cod === 302 || data.cod === 310 || data.cod === 311 || data.cod === 312 || data.cod === 313 || data.cod === 314 || data.cod === 321 ){
      return(     <Icon2 name='cloud-drizzle' color="#FFF" size={30} style={{marginBottom:10}}/>)
    }
    else if(data.cod === 500 || data.cod === 501 || data.cod === 502 || data.cod === 503 || data.cod === 504 || data.cod === 511 || data.cod === 520 || data.cod === 521 || data.cod === 522 || data.cod === 531){
      return(     <Icon name='cloud-rain' color="#FFF" size={30} style={{marginBottom:10}}/>)
    }
    else if(data.cod === 600 || data.cod === 601 || data.cod === 602 || data.cod === 611 || data.cod === 612 || data.cod === 613 || data.cod === 615 || data.cod === 616 || data.cod === 620 || data.cod === 621 || data.cod === 622){
      return(     <Icon name='snowflake' color="#FFF" size={30} style={{marginBottom:10}}/>)
    }
    else if(data.cod === 701 || data.cod === 711 || data.cod === 721 || data.cod === 731 || data.cod === 741 || data.cod === 751 || data.cod === 761 || data.cod === 762 || data.cod === 771 || data.cod === 781){
      return(     <Icon name='smog' color="#FFF" size={30} style={{marginBottom:10}}/>)
    }
    
   }

 return (
   <ButtonContent onPress={()=>setVisibleModal(true)}>
 
    <Container>
      <Title>
          <TitleText>{week}</TitleText>
      </Title>
    
        <ViewTemp>
          <TempDay>{parseInt(data.tempDay)}°</TempDay>
          <Icon1></Icon1>
          <MinText>Min</MinText>
          <TempText>{parseInt(data.tempMin)}°</TempText>
          <MaxText>Max</MaxText>
          <TempText>{parseInt(data.tempMax)}°</TempText>
        </ViewTemp>

      <Modal transparent={true} animationType='slide' visible={visibleModal}>
        <ModalDetails data={data} setVisible={() => {setVisibleModal(false)}}/>
      </Modal>
      
      </Container>
   </ButtonContent>
  );
}

