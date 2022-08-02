import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background-color: #D6E4FF;
margin-top: 15%;
`;

export const BackButton = styled.TouchableOpacity`
background-color: #000; 
width: 50px;
height: 50px;
justify-content: center;
align-items: center;
position: absolute;
right: 3%;
top: 3%;
border-radius: 25px;
`;

export const Title = styled.Text`
margin-top: 15%;
text-align: center;
font-weight: bold;
font-size: 30px;
color: #5a6085;
`;

export const SubTitle = styled.Text`
margin-top: 5%;
margin-bottom: 5%;
text-align: center;
font-weight: bold;
font-size: 25px;
color: #000;
`;

export const ContainerCard = styled.View`
flex-direction: row;
justify-content: center;
margin:5px 0; 
`;

export const Card = styled.View`
width: 100px;
height: 100px;
border-radius: 50px;
margin: 5px;
justify-content: center;
align-items: center;
`;
export const Temp = styled.Text`
font-size: 18px;
`;
export const Split = styled.View`
 width: 2px;
 background-color: #000;
 height: 100px;
`;

export const Detail = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 10px;
padding: 5px;
`;
export const DetailText = styled.Text`
font-size: 18px;
`;