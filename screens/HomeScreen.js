import React from "react";
import {
    View,
    Text, 
    StyleSheet, 
    Button
} from "react-native"

const HomeScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Button
            title="go to Details"
            onPress={() => navigation.navigate("Details")}
            />
            <Text>Home</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})