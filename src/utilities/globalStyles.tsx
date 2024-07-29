import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    authContainer: {
        flex: 1,
        backgroundColor: "#fcfcfc",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    authTopContainer: {
        padding: 20,
        justifyContent: "space-evenly",
    },
    authMiddleContainer: {
        padding: 20,
    },
    authBottomContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputLabel: {
        color: '#252A31',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%',
        borderRadius: 3,
        height: 50,
        borderWidth: 1,
        borderColor: "#000000",
        flexDirection: "row",
        marginBottom: 30,
    },
    submitButton: {
        backgroundColor: "#367BBF",
        borderRadius: 5,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    authTittleText: {
        color: '#000000',
        fontWeight: '600',
        fontSize: 32,
    },
    optionalAuthText: {
        color: "#000000",
        fontWeight: '600',
        fontSize: 16,
    },
    authLogo: {
        alignSelf: "center",
        width: "40%",
    },
    submitButtonText: {
        color: "#F8F9FD",
        fontWeight: '600',
        fontSize: 18,
    },
})