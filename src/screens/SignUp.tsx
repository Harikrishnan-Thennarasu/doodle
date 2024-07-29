import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyle } from '../utilities/globalStyles';
import AuthSwithMobileOrEmail from '../components/AuthSwitchMobileOrEmail';
import { Icon } from '@rneui/base';

const SignUp = ({ navigation }: any) => {
    const [selectedSignUpType, setSelectedSignUpType] = useState('MOBILE');

    const onSendOtp = () => {
        navigation.navigate('VerifyOTP');
    }

    const onSendVerifyEmail = () => {
    }
    return (
        <View style={globalStyle.authContainer}>
            <View style={globalStyle.authTopContainer}>
                <Image
                    style={globalStyle.authLogo}
                    resizeMode={"contain"}
                    source={require('../assets/digigrain-text.png')}
                />
                <Text style={globalStyle.authTittleText}>Sign Up</Text>
            </View>
            <View style={globalStyle.authMiddleContainer}>
                <AuthSwithMobileOrEmail
                    value={selectedSignUpType}
                    onSwitch={setSelectedSignUpType}
                />
                {selectedSignUpType === 'MOBILE' ?
                    <>
                        <Text style={[globalStyle.inputLabel, { marginTop: 50 }]}>Mobile Number</Text>
                        <View style={globalStyle.inputContainer}>
                            <Text style={styles.countryCode}>+91 <Text style={styles.separator}>|</Text></Text>
                            <TextInput inputMode="numeric" placeholder="Enter here" style={styles.input} onChangeText={() => { }} />
                        </View>
                        <TouchableOpacity onPress={onSendOtp} activeOpacity={0.5} style={globalStyle.submitButton}>
                            <Text style={globalStyle.submitButtonText}>Send OTP</Text>
                        </TouchableOpacity>
                    </>

                    :
                    <>
                        <Text style={[globalStyle.inputLabel, { marginTop: 50 }]}>Mail ID</Text>
                        <View style={globalStyle.inputContainer}>
                            <TextInput inputMode="email" placeholder="Enter here" style={styles.input} onChangeText={() => { }} />
                        </View>
                        <TouchableOpacity onPress={onSendVerifyEmail} activeOpacity={0.5} style={globalStyle.submitButton}>
                            <Text style={globalStyle.submitButtonText}>Send Verificarion Link</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
            <ImageBackground
                source={require('../assets/farmer-female.jpeg')}
                style={globalStyle.authBottomContainer}
                imageStyle={styles.imageStyle}
            >
                <Text style={globalStyle.optionalAuthText}>
                    Already Have an Account? <Text style={styles.signupLink} onPress={() => { navigation.pop() }}>Sign In Instead</Text>
                </Text>
                <Text style={styles.guestText}>Continue as guest</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    countryCode: {
        alignSelf: "center",
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 10,
        marginTop: -8,
        color: '#000000',
    },
    separator: {
        fontSize: 25,
    },
    input: {
        width: "auto",
        flex: 1,
        fontSize: 16,
        marginHorizontal: 10
    },
    imageStyle: {
        opacity: 0.3,
    },
    signupLink: {
        color: "#367BBF",
    },
    guestText: {
        textAlign: "center",
        position: "absolute",
        bottom: 40,
        color: "#367BBF",
        borderBottomColor: "#367BBF",
        borderBottomWidth: 1,
        fontSize: 16,
        fontWeight: '600'
    }
});

export default SignUp;
