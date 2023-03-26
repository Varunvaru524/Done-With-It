import { Text, ImageBackground, View } from "react-native";
import backgroundImage from '../assets/background.jpg'

function WelcomePage(props) {
    return (
        <View>
            <ImageBackground style={{  height: "100%" }} source={backgroundImage} />
        </View>
    );
}

export default WelcomePage;