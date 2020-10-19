import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const GameComponent = (props) => {
    const [winOrLose, setWinOrLose] = useState('DEFAULT');
    const [varijabla, setVarijabla] = useState(0);
    const Kombinacija = (a) =>{
        setVarijabla(a);
        setWinOrLose(KamenPapirMakaze(a));
    }
    const KamenPapirMakaze = (x) =>{
        let randomNumber = 1 + Math.floor(3 * Math.random());
        switch(x){
            case 1:
                return randomNumber==1 ? 'NERIJESENO: Protivnik je izabrao KAMEN' : 
                randomNumber == 2 ? 'IZGUBIO SI: PROTIVNIK JE IZABRAO PAPIR' : 
                'POBIJEDIO SI: PROTIVNIK JE IZABRAO MAKAZE';
            case 2:
                return randomNumber==2 ? 'NERIJESENO: PROTIVNIK JE IZABRAO PAPIR' : 
                randomNumber == 1 ? 'POBIJEDIO SI: PROTIVNIK JE IZABRAO KAMEN' : 'IZGUBIO SI: PROTIVNIK JE IZABRAO MAKAZE';
            case 3: 
            return randomNumber==3 ? 'NERIJESENO: PROTIVNIK JE IZABRAO MAKAZE' : 
            randomNumber == 1 ? 'IZGUBIO SI: PROTIVNIK JE KAMEN' : 'POBIJEDIO SI: PROTIVNIK JE IZABRAO PAPIR';

        }
    };
    
    return(
        <View style={styles.container}>
            <Text>
            <Button title={"KAMEN"} onPress={() => Kombinacija(1)}/>
            <Button title={"PAPIR"} onPress={() => Kombinacija(2)}/>
            <Button title={"MAKAZE"} onPress={() => Kombinacija(3)}/>
            </Text>
            <Text>
            {winOrLose}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center', 
        alignItems: 'center',
    }
}

);

export default GameComponent;