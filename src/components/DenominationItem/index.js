import {ItemContainer,Button} from './styled'

const DenominationItem =(props)=>{
    const {eachItem,onAddValue}=props
    const {value}=eachItem

    const onClickValue=()=>{
        onAddValue(value)
        console.log(value)
    }
      return(
          <ItemContainer>
              <Button type="button" onClick={onClickValue}>{value}</Button>
          </ItemContainer>
      )
  
  }
  
  export default DenominationItem