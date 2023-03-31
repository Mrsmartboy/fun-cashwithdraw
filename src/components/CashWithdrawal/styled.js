import styled from 'styled-components'

export const MainContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const CardContainer=styled.div`
display: flex;
flex-direction: column;
padding: 20px;
background-color: #150b3e;
border-radius: 10px;
margin: 20px;
width: 40%;

`

export const ProfileContainer=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`

export const FirstLetter=styled.p`
   background-color: #c7d2fe;
   padding-left: 20px;
   padding-right: 20px;
   padding-top: 10px;
   padding-bottom: 10px;
   color: #7c3aed;
   font-size: 15px;
   font-weight: bold;
   margin-right: 10px;
   border-radius:40px ;
`

export const Header=styled.h1`
  color: #d4d2db;
  font-size: 20px;
  font-weight: 500;
`
export const BalanceContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Balance=styled.p`
color  : #585076;
font-size: 20px;
font-weight: bold;
font-weight: bold;
`
export const AmountContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Amount =styled.p`
  color: #d4d2db;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 8px;

`
export const Rupees=styled.p`
 color: #585076;
 font-size: 12px;
 font-weight: bold;
 margin-top: 0px;

`
export const WithDraw=styled.p`
  color:  #d4d2db;
  font-size: 20px;
  font-weight: bold;

`
export const Sum=styled.p`
  color: #585076;
  font-size: 20px;
  font-weight: bold;
`

export const ListContainer=styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  flex-wrap: wrap;
  justify-content: space-between;
`