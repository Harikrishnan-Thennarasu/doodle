import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const AuthSwithMobileOrEmail = ({ value, onSwitch }: any) => {
    return (
        <View style={styles.buttonGroup}>
            <TouchableOpacity
                onPress={() => { onSwitch('MOBILE') }}
                activeOpacity={0.5}
                style={value === 'MOBILE' ? styles.selectedButton : styles.unSelectedButton}
            >
                {value === 'MOBILE' && <Image
                    style={styles.icon}
                    source={require('../assets/mobile.gif')}
                />}
                <Text
                    style={value === 'MOBILE' ? styles.selectedButtonText : styles.unSelectedButtonText}
                >Mobile Number</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onSwitch('EMAIL') }}
                style={value === 'EMAIL' ? styles.selectedButton : styles.unSelectedButton}
            >
                {value === 'EMAIL' && <Image
                    style={[styles.icon, { height: 35, width: 35 }]}
                    source={require('../assets/mail.gif')}
                />}
                <Text
                    style={value === 'EMAIL' ? styles.selectedButtonText : styles.unSelectedButtonText}
                >Mail ID</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        backgroundColor: "#f5f5f5",
        flexDirection: "row",
        borderRadius: 10,
        justifyContent: "space-between",
    },
    selectedButton: {
        backgroundColor: "#E1F1FF",
        borderRadius: 5,
        margin: 5,
        justifyContent: "center",
        width: "55%",
        height: 50,
        alignItems: "center",
        borderWidth: 0.2,
        borderColor: "#00446B",
        flexDirection: "row",
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    selectedButtonText: {
        color: "#367BBF",
        fontWeight: '400',
        fontSize: 18,
        textAlign: "center",
    },
    unSelectedButton: {
        borderRadius: 5,
        margin: 5,
        justifyContent: "center",
        width: "40%",
        height: 50,
        alignItems: "center",
        flexDirection: "row",
    },
    unSelectedButtonText: {
        color: "#000000",
        fontWeight: '400',
        fontSize: 18,
        textAlign: "left",
    },
})


export default AuthSwithMobileOrEmail;