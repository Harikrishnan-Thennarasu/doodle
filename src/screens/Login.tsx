import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyle } from '../utilities/globalStyles';
import AuthSwithMobileOrEmail from '../components/AuthSwitchMobileOrEmail';
import { Icon } from '@rneui/base';

const Login = ({ navigation }: any) => {
    const [selectedLoginType, setSelectedLoginType] = useState('MOBILE');
    const [isHidePassword, setHidePassword] = useState(true);

    const onSendOtp = () => {
        navigation.navigate('VerifyOTP');
    }

    const onToggolePasswordVisibity = () => {
        setHidePassword(!isHidePassword);
    }
    return (
        <View style={globalStyle.authContainer}>
            <View style={globalStyle.authTopContainer}>
                <Image
                    style={globalStyle.authLogo}
                    resizeMode={"contain"}
                    source={require('../assets/digigrain-text.png')}
                />
                <Text style={globalStyle.authTittleText}>Login</Text>
            </View>
            <View style={globalStyle.authMiddleContainer}>
                <AuthSwithMobileOrEmail
                    value={selectedLoginType}
                    onSwitch={setSelectedLoginType}
                />
                {selectedLoginType === 'MOBILE' ?
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
                        <Text style={globalStyle.inputLabel}>Password</Text>
                        <View style={globalStyle.inputContainer}>
                            <TextInput secureTextEntry={isHidePassword} placeholder="Enter here" style={styles.input} onChangeText={() => { }} />
                            <TouchableOpacity
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: 50
                                }}
                                onPress={onToggolePasswordVisibity}
                            >
                                <Icon
                                    name={isHidePassword ? "visibility" : "visibility-off"}
                                    type="material"
                                    color="#001C3B"
                                    size={30}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.forgotPassText}>Forgot password?</Text>
                        <TouchableOpacity onPress={onSendOtp} activeOpacity={0.5} style={globalStyle.submitButton}>
                            <Text style={globalStyle.submitButtonText}>Sign In</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
            <ImageBackground
                source={require('../assets/farmer.jpeg')}
                style={globalStyle.authBottomContainer}
                imageStyle={styles.imageStyle}
            >
                <Text style={globalStyle.optionalAuthText}>
                    New to DigiGrain? <Text style={styles.signupLink} onPress={() => { navigation.navigate('SignUp') }}>Sign Up Instead</Text>
                </Text>
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
    forgotPassText: {
        textAlign: "right",
        marginBottom: 20,
        color: "#367BBF",
        fontWeight: "600",
        fontSize: 15
    }
});

export default Login;
