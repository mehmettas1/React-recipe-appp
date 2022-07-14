import React from 'react'
import HeaderStyle, { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './Header.style'
const Header = ({setQuery}) => {
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer>
        <FoodInput type="text" placeholder='search' onChange={(e)=>setQuery(e.target.value)}>

        </FoodInput>
        <Button type='submit'>SEARCH</Button>
        <Select name='mealtype' id='mealType' ></Select>
      </FormContainer>
    </HeaderContainer>
  )
}

export default Header