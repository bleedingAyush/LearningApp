import React from "react";
import {
    View,
    Text, 
    StyleSheet, 
    Button
} from "react-native"

const ProfileScreen = () =>{
    return (
        <View style={styles.container}>
            <Button
            title="go to Details"
            onPress={() => alert("Button Clicked")}
            />
            <Text>Profile</Text>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})