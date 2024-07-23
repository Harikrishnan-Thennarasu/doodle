import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import { Alert, Linking } from 'react-native';

export const notifeePermission = async (callBack: any) => {
    try {
        const notifyIsGranted = await notifee.requestPermission();
        if (notifyIsGranted?.authorizationStatus === 1) {
            callBack();
        } else {
            Alert.alert(
                'Permission Required',
                'This app needs notification access to show alert. Please grant the permission.',
                [
                    {
                        text: 'Skip',
                        onPress: () => { },
                        style: 'cancel',
                    },
                    {
                        text: 'Setting',
                        onPress: () => {
                            Linking.openSettings().then((data) => {
                                console.log('SETTINGS', data)
                            });
                        }
                    },
                ]
            );
        }
    } catch (error) {
        console.error(error)
    }
}

export const notifeeHandler = ({ type, detail }: any) => {
    const { notification, pressAction } = detail;
    switch (type) {
        case EventType
            .DISMISSED:
            console.log('notification dismissed', notification);
            break;
        case EventType.PRESS:
            console.log('notification pressed ', notification);
            break;
        case EventType.ACTION_PRESS:
            console.log('notification pressed ', pressAction);
            break;
    }
}

export const onDisplayNotification = async () => {
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
        id: 'BASIC',
        name: 'Basic Notication',
    });

    // Display a notification
    await notifee.displayNotification({
        title: 'Hello',
        body: 'This is a sample notification featuring icons',
        android: {
            channelId,
            largeIcon: require('../assets/doodle.png'),
            smallIcon: 'ic_notificaion_icon', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
                id: 'default',
            },
            showTimestamp: true,
        },
    });
}

export const onDisplayStyledNotifee = async () => {
    const channelId = await notifee.createChannel({
        id: 'TEXT_STYLED',
        name: 'Test Styled',
    });

    notifee.displayNotification({
        title: '<p style="color: #4caf50;"><b>Hello</span></p></b></p> &#128576;',
        subtitle: '&#129395;',
        body:
            'This is<p style="text-decoration: line-through">text styled</p> test <p style="color: #ffffff; background-color: #9c27b0"><i>notification</i></p> &#127881;!',
        android: {
            channelId,
            smallIcon: 'ic_notificaion_icon', // optional, defaults to 'ic_launcher'.
            actions: [
                {
                    title: '<b>Dance</b> &#128111;',
                    pressAction: { id: 'dance' },
                },
                {
                    title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
                    pressAction: { id: 'cry' },
                },
            ],
            largeIcon: require('../assets/doodle.png'),
            showTimestamp: true,
        },
    });
}

export const onDisplayHighPriorityNotifee = async () => {
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default',
        sound: 'default',
        importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
        title: 'Your account requires attention',
        body: 'You are overdue payment on one or more of your accounts!',
        android: {
            channelId,
            importance: AndroidImportance.HIGH,
            smallIcon: 'ic_notificaion_icon', // optional, defaults to 'ic_launcher'.
            largeIcon: require('../assets/doodle.png'),
            showTimestamp: true,
        },
    });
}