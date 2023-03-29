import { Image, StyleSheet, Text, View } from "react-native";
import rootCss from "../rootCss";
import chair from '../assets/chair.jpg'

function ViewImageScreen(props) {
    return (
        <View style={styles.theContainer}>
            <View style={styles.buttonContainer}>
                <View style={styles.closeButton}></View>
                <View style={styles.deleteButton}></View>
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
    closeButton: {
        backgroundColor: rootCss.primaryColor,
        height: 50,
        width: 50
    },
    deleteButton: {
        backgroundColor: rootCss.secondaryColor,
        height: 50,
        width: 50
    },
    chair: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImageScreen;