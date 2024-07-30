import { useState } from "react";
import { View } from "react-native";


type Props = {
    children: JSX.Element,
    height?: number,
    width?: number
}

const EclipseBgLayer = ({ children, height, width }: Props) => {
    const [warrperHight, setWarrperHight] = useState(350);
    const [warrperWidth, setWarrperWidth] = useState(350);
    const [eclipseSize, setEclipseSize] = useState(350);

    const onLayout = ({ nativeEvent }: any) => {
        const { layout } = nativeEvent;
        if (layout && layout.height && layout.width) {
            setWarrperHight(layout.height);
            setWarrperWidth(layout.width);
            if (layout.width > layout.height) {
                setEclipseSize(layout.width * 2);
            } else {
                setEclipseSize(layout.height);
            }
        }
    }

    return (
        <View
            onLayout={onLayout}
            style={{
                height: height ? height : '100%',
                width: width ? width : '100%',
                backgroundColor: "#F8FFF6",
                overflow: "hidden",
                borderRadius: 15,
                borderColor: '#61903D',
                borderWidth: 1
            }}
        >
            <View
                style={{
                    alignSelf: "center",
                    height: eclipseSize,
                    width: eclipseSize,
                    backgroundColor: "#DEFFCE",
                    borderRadius: eclipseSize,
                    marginTop: -eclipseSize + (warrperHight / 2)
                }}
            />
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                }}
            >
                {children}
            </View>
        </View>
    )
}

export default EclipseBgLayer;