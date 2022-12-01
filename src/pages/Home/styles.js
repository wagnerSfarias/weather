import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
`;

export const Background = styled.ImageBackground`
height: 100%;
flex: 1;
align-items: center;
`;

export const ViewTitle = styled.View`
width: 80%;
margin-top: 20%;
padding: 12px;
`;

export const Title = styled.Text`
text-align: center;
font-size: 30px;
font-weight: bold;
color: #FFF;
`;
export const ViewSearch = styled.TouchableOpacity`
background-color: #FFF;
height: 50px;
width: 50px;
border-radius: 30px;
position: absolute;
right: 5%;
top: 5%;
justify-content: center;
align-items: center;
`;

export const Temp = styled.Text`
text-align: center;
font-size: 80px;
color: #fff;
`;

export const Description = styled.Text`
text-align: center;
font-size: 28px;
color: #fff;
`;

export const ViewTemp = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const Temperatures = styled.Text`
font-size: 24px;
 color: #FFF;
`;

export const NextDays = styled.Text`
font-size: 25px;
font-weight: bold;
color: #FFF;
`;

export const Split = styled.View`
background-color: #D6E4FF;
width: 98%;
height: 2px;
margin-bottom: 10px;
`;

export const ViewFlatList = styled.View`
width: 90%;
`;

export const List = styled.FlatList`
`;

export const ContainerLoading = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;