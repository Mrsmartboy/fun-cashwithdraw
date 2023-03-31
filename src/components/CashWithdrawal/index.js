import {useState} from 'react'
import DenominationItem from '../DenominationItem'
import {MainContainer,CardContainer,FirstLetter,Header,BalanceContainer,Balance,AmountContainer,Amount,Rupees,WithDraw,Sum, ListContainer,ProfileContainer} from './styled'

const CashWithdrawal=(props)=>{
    const [amount,setAmount]=useState(2000)
    const {denominationsList}=props

    const onAddValue=(value)=>{
        setAmount(prevState=>prevState-value)
    }
    
 
    return(
        <MainContainer>
            <CardContainer>
                <ProfileContainer>
                <FirstLetter>S</FirstLetter>
                <Header>Sarah Williams</Header>
                </ProfileContainer>
                <BalanceContainer>
                <Balance>Your Balance</Balance>
                <AmountContainer>
                    <Amount>{amount}</Amount>
                    <Rupees>In Rupees</Rupees>
                </AmountContainer>
              
                </BalanceContainer>
                <WithDraw>WithDraw</WithDraw>
                <Sum>CHOOSE SUM IN (RUPEES)</Sum>
                <ListContainer>
             {denominationsList.map(eachItem=>(
               <DenominationItem eachItem={eachItem} key={eachItem.id} onAddValue={onAddValue}/>
             ))}
            </ListContainer>
            </CardContainer>
            
        </MainContainer>
    )

}

export default CashWithdrawal