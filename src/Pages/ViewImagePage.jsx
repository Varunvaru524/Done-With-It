import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import rootCss from "../rootCss";
import chair from '../assets/chair.jpg'

function ViewImagePage(props) {
    return (
        <View style={styles.theContainer}>
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name="close" color={rootCss.white} size={30} />
                <MaterialCommunityIcons name="trash-can-outline" color={rootCss.white} size={30} />
            </View>
            <Image style={styles.chair} resizeMode="contain" source={chair} />
        </View>
    );
}

const styles = StyleSheet.create({
    theContainer: {
        height: '100%',
        backgroundColor: '#000'
    },
    buttonContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 50,
        position: "absolute",
    },
    chair: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImagePage;