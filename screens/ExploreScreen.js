import React from "react";
import {
    View,
    Text, 
    StyleSheet, 
    Button
} from "react-native"

const ExploreScreen = () =>{
    return (
        <View style={styles.container}>
            <Button
            title="go to Details"
            onPress={() => alert("Button Clicked")}
            />
            <Text>Explore</Text>
        </View>
    )
}

export default ExploreScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})