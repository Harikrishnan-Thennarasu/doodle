import { useAppState } from "@react-native-community/hooks";
import { useIsFocused } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CodeType, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera"

const CODE_TYPES: CodeType[] = ['code-128', 'code-39', 'code-93', 'codabar', 'ean-13', 'ean-8', 'itf', 'upc-e', 'upc-a', 'qr', 'pdf-417', 'aztec', 'data-matrix'];

const Scanner = ({ navigation }: any) => {

    const isFocused = useIsFocused();
    const appState = useAppState();
    const isActive = isFocused && appState === "active";
    const [isScanCompleted, setIsScanCompleted] = useState(false);

    const [isTorchOn, setTourchState] = useState(false);
    const device = useCameraDevice('back');
    const camera = useCameraPermission();
    const codeScanner = useCodeScanner({
        codeTypes: CODE_TYPES,
        onCodeScanned: (codes, frame) => {
            setIsScanCompleted(true);
            navigation.navigate('ScanResult', { codes, frame });
        }
    })

    useEffect(() => {
        if (camera && !camera.hasPermission) {
            camera.requestPermission();
        }
    }, [])

    useLayoutEffect(() => {
        console.log('isFocused : ', isFocused)
        if (isFocused) {
            setIsScanCompleted(false);
        }
    }, [isFocused]);

    if (!camera.hasPermission) return null  //<PermissionsPage />
    if (device == null) return null   //<NoCameraDeviceError />

    return (
        <>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isActive && isScanCompleted == false}
                codeScanner={codeScanner}
                torch={isTorchOn ? 'on' : 'off'}
            />
            <TouchableOpacity
                style={{
                    position: "absolute",
                    bottom: 50,
                    alignSelf: "center",
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                    backgroundColor: 'rgba(140, 140, 140, 0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} onPress={() => setTourchState(!isTorchOn)} >
                <Icon type="material" name={isTorchOn ? 'flashlight-on' : 'flashlight-off'} color={isTorchOn ? "#007bff" : "#fcfcfc"} size={24} />
            </TouchableOpacity>
        </>
    )
}

export default Scanner;


