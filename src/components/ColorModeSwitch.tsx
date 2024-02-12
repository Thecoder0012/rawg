import { HStack, Switch, useColorMode,Text } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <>
    <HStack> 
        <Switch 
        justifyContent={'space-between'}
        colorScheme='green' 
        isChecked={colorMode === 'dark'} 
        onChange={toggleColorMode}>
        </Switch>
        <Text>Dark</Text>
    </HStack>
    </>
  )
}

export default ColorModeSwitch