import { Text, ImageBackground, View, StyleSheet, Image } from "react-native";
import AppButton from "../Components/AppButton";
import backgroundImage from '../assets/background.jpg'
import Logo from '../assets/logo-red.png'


function WelcomePage({navigation}) {
    return (
        <ImageBackground blurRadius={5} style={styles.bgImage} source={backgroundImage}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton onPress={()=>navigation.navigate('loginScreen')}>Login</AppButton>
                <AppButton onPress={()=>navigation.navigate('registerScreen')} bgColor='secondary'>Register</AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
    },
    logoContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    logo: {
        height: 100,
        width: 100,
    },
    tagline:{
        marginTop:20,
        fontWeight:"400",
        fontSize:25
    },
    buttonContainer: {
        padding: 10,
        marginTop:50
    }
})


export default WelcomePage;