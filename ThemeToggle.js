import React, { useContext } from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return(
    <TouchableOpacity style={{height: 40, width: 300, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 20, margin: 20}} onPress={toggleTheme}>
        <Text style={{color: 'white'}}>Toggle Theme</Text>
    </TouchableOpacity>
  )
//    <Button title="Toggle Theme" onPress={()=> console.log("yesss...")} />;
};

export default ThemeToggle;