import { Icon } from "@rneui/base";
import { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const TOTAL_ONBOARDING_STEPS = 3;


const ONBOARDING_STEPS: any = {
    1: {
        image: require('../assets/wheet.png'),
        title: "Revolutionizing Grain Management",
        description: "Welcome to Digigrain! Our smart warehouse solutions with 'phygital management' system are revolutionizing grain management."
    },
    2: {
        image: require('../assets/cotton.png'),
        title: "Innovative Solutions for Grains",
        description: "At Digigrain, we're dedicated to providing innovative solutions for grain management through the power of technology"
    },
    3: {
        image: require('../assets/factory.png'),
        title: "Transforming the Grain Industry",
        description: "Join us in our mission to transform the grain industry with our smart warehouse solutions and 'phygital management' system"
    }
}

const Onboarding = ({ navigation }: any) => {
    const [onGoingStep, setOnGoingStep] = useState(1);
    const stepDetails = ONBOARDING_STEPS[onGoingStep];

    const onNextStep = () => {
        const nextStep = onGoingStep + 1;
        if (TOTAL_ONBOARDING_STEPS >= nextStep) {
            setOnGoingStep(nextStep);
        } else {
            navigation.navigate('Login');
        }
    }

    const onPreviousStep = () => {
        const nextStep = onGoingStep - 1;
        if (nextStep > 0) {
            setOnGoingStep(nextStep);
        }
    }

    const onSkip = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode={'stretch'}
                style={styles.imageBackground}
                tintColor={"#83BD56"}
                source={require('../assets/onboarding-bg.png')}
            >
                <View style={styles.innerContainer}>
                    <View style={styles.contentContainer}>
                        <View style={styles.backAndSkip}>
                            <TouchableOpacity
                                onPress={onPreviousStep}
                                style={styles.previousButton}>
                                {onGoingStep !== 1 &&
                                    <Icon
                                        name="arrow-back"
                                        type="material"
                                        color="#001C3B"
                                    />
                                }
                            </TouchableOpacity>
                            {onGoingStep !== TOTAL_ONBOARDING_STEPS && <TouchableOpacity onPress={onSkip} style={styles.skipButton}>
                                <Text style={styles.skipText}>SKIP</Text>
                            </TouchableOpacity>}
                        </View>
                        <Image
                            resizeMode={'contain'}
                            style={styles.mainImage}
                            source={stepDetails.image}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>{stepDetails.title}</Text>
                            <Text style={styles.descriptionText}>{stepDetails.description}</Text>
                        </View>
                        <View style={styles.progressContainer}>
                            <Text style={styles.progressText}>{onGoingStep}/{TOTAL_ONBOARDING_STEPS}</Text>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={onNextStep}
                            >
                                <AnimatedCircularProgress
                                    size={110}
                                    width={2.5}
                                    fill={(100 / TOTAL_ONBOARDING_STEPS) * onGoingStep}
                                    rotation={0}
                                    tintColor="#367BBF"
                                    backgroundColor="rgba(54, 123, 191, 0.2)"
                                >
                                    {
                                        (fill) => (
                                            onGoingStep !== TOTAL_ONBOARDING_STEPS ?
                                                <View
                                                    style={styles.nextButton}
                                                >
                                                    <Text style={styles.buttonText}>Next</Text>
                                                </View>
                                                :
                                                <View
                                                    style={styles.continueButton}
                                                >
                                                    <Text style={styles.buttonText}>Continue</Text>
                                                </View>
                                        )
                                    }
                                </AnimatedCircularProgress>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image
                        resizeMode={'stretch'}
                        style={styles.footerImage}
                        source={require('../assets/onboarding-footer.png')}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc',
    },
    imageBackground: {
        height: '100%',
        marginTop: '5%',
        width: '100%',
    },
    innerContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 8,
        alignItems: "center",
        justifyContent: "space-between",
    },
    backAndSkip: {
        width: '100%',
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 20,
    },
    skipButton: {
        alignSelf: "flex-end",
        marginRight: 20,
    },
    previousButton: {
        alignSelf: "flex-start",
        marginLeft: 20,
    },
    skipText: {
        color: "#61903D",
        fontSize: 18,
        fontWeight: '600',
    },
    mainImage: {
        width: "100%",
        height: "42%",
    },
    textContainer: {
        paddingHorizontal: 50,
        rowGap: 15,
    },
    titleText: {
        textAlign: "center",
        color: "#001C3B",
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 20,
    },
    descriptionText: {
        textAlign: "center",
        fontWeight: '400',
        lineHeight: 25,
        fontSize: 16,
        color: "#000000",
    },
    progressContainer: {
        rowGap: 15,
    },
    progressText: {
        color: "#000000",
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 30,
        textAlign: "center",
    },
    nextButton: {
        backgroundColor: "#367BBF",
        height: '80%',
        width: '80%',
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    continueButton: {
        backgroundColor: "#367BBF",
        height: '100%',
        width: '100%',
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: '#F8F9FD',
        fontWeight: '400',
        fontSize: 18,
    },
    footerImage: {
        width: "100%",
        height: "20%",
        flex: 2,
    },
});

export default Onboarding;
