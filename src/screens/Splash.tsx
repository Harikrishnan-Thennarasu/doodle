import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode={'cover'}
                style={styles.backgroundImage}
                source={require('../assets/splash-bg.png')}
            />

            <Image
                style={styles.logo}
                resizeMode={'contain'}
                source={require('../assets/digigrain-logo.png')}
            />

            <Image
                style={styles.footerImage}
                resizeMode={'stretch'}
                source={require('../assets/splash-bg-footer.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        opacity: 0.3,
        position: 'absolute',
    },
    logo: {
        width: '60%',
        height: '60%',
        marginBottom: '45%',
    },
    footerImage: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});

export default Splash;
