import { Text, ImageBackground, View, StyleSheet, Image } from "react-native";
import backgroundImage from '../assets/background.jpg'
import Logo from '../assets/logo-red.png'


function WelcomePage(props) {
    return (
        <ImageBackground style={styles.bgImage} source={backgroundImage}>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={Logo} />
                <Text>Sell What You Don't Need</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        height: "100%",
        display: 'flex',
        justifyContent: 'flex-end',
    },
    loginButton: {
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    logoContainer:{
        position: "absolute",
        top: 100,
        width:"100%",
        display:"flex",
        alignItems:"center"
    },
    logo: {
        height: 100,
        width: 100,
    }
})


export default WelcomePage;