import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { globalStyle } from "../utilities/globalStyles"
import { Icon } from "@rneui/base";
import OTPTextView from "../components/OtpInput";

const VerifyOTP = ({ navigation }: any) => {
    return (
        <View style={globalStyle.authContainer}>
            <View style={globalStyle.authTopContainer}>
                <Image
                    style={globalStyle.authLogo}
                    resizeMode={"contain"}
                    source={require('../assets/digigrain-text.png')}
                />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon
                        onPress={() => {
                            navigation.pop();
                        }}
                        name="arrow-back"
                        type="material"
                        color="#001C3B"
                        size={30}
                    />
                    <Text style={[globalStyle.authTittleText, { marginLeft: 10 }]}>Verify OTP</Text>
                </View>
            </View>
            <View style={globalStyle.authMiddleContainer}>
                <Text style={[globalStyle.inputLabel, { marginTop: 100 }]}>Enter OTP</Text>
                <OTPTextView
                    textInputStyle={{
                        borderRadius: 6,
                        borderWidth: 1,
                        height: 50,
                        width: 65,
                        marginBottom: 25
                    }}
                    defaultValue={""}
                    tintColor={'#002A24'}
                    offTintColor={'#002A24'}
                />
                <TouchableOpacity onPress={() => { }} activeOpacity={0.5} style={globalStyle.submitButton}>
                    <Text style={globalStyle.submitButtonText}>Send OTP</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 25, textAlign: "center", fontSize: 18, fontWeight: 400, color: "#000000" }}>Didn’t Receive OTP? <Text style={{ color: "#367BBF" }}>Resend OTP</Text></Text>
            </View>
            <ImageBackground
                source={require('../assets/farmer.jpeg')}
                style={globalStyle.authBottomContainer}
                imageStyle={{ opacity: 0.3 }}
            />
        </View>
    )
}

export default VerifyOTP;