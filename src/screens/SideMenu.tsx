import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Avatar, Icon, ListItem, Badge } from '@rneui/themed';

const SideMenu = () => {
    const [isReportOpen, setIsReportOpen] = useState(false);
    const [isOngoingTransationOpen, setIsOngoingTransOpen] = useState(false);
    const [isPaymentsOpen, setPaymentOpen] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.profileContainer}>
                    <View style={{ flex: 2 }}>
                        <Avatar
                            size="large"
                            rounded
                            title="T"
                            containerStyle={styles.avatarContainer}
                        />
                    </View>
                    <View style={styles.profileTextContainer}>
                        <Text style={styles.name} numberOfLines={1}>Theainmozhy</Text>
                        <Text style={styles.phone}>+91 93459 42220</Text>
                    </View>
                </View>
                <ListItem containerStyle={styles.listItemContainer} topDivider bottomDivider>
                    <Icon type={'feather'} color={'#000000'} name="users" />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listItemTitle}>Profile - KYC <Text style={styles.kycCompletion}>(60% Completed)</Text></ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem containerStyle={styles.listItemContainer} bottomDivider>
                    <Icon name="message-circle" type="feather" color={'#000000'} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listItemTitle}>Submit Request</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem containerStyle={styles.listItemContainer} bottomDivider>
                    <Icon name="file-text" type="feather" color={'#000000'} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listItemTitle}>Agreements</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem.Accordion
                    bottomDivider={true}
                    content={
                        <>
                            <Icon name="clipboard" type="feather" color={'#000000'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.listItemTitle}>Reports</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    containerStyle={styles.accordionContainer}
                    isExpanded={isReportOpen}
                    onPress={() => {
                        setIsReportOpen(!isReportOpen);
                    }}
                >
                    <View style={styles.accordionContentContainer}>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Purchase</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Storage</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Release requests</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Release orders</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    </View>
                </ListItem.Accordion>

                <ListItem.Accordion
                    bottomDivider={true}
                    content={
                        <>
                            <Icon name="truck" type="feather" color={'#000000'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.listItemTitle}>Ongoing Transactions</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    containerStyle={styles.accordionContainer}
                    isExpanded={isOngoingTransationOpen}
                    onPress={() => {
                        setIsOngoingTransOpen(!isOngoingTransationOpen);
                    }}
                >
                    <View style={styles.accordionContentContainer}>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Purchase</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Storage</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Release</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    </View>
                </ListItem.Accordion>

                <ListItem.Accordion
                    bottomDivider={true}
                    content={
                        <>
                            <Icon name="credit-card" type="feather" color={'#000000'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.listItemTitle}>Payments</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    containerStyle={styles.accordionContainer}
                    isExpanded={isPaymentsOpen}
                    onPress={() => {
                        setPaymentOpen(!isPaymentsOpen);
                    }}
                >
                    <View style={styles.accordionContentContainer}>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Advances requested</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Paid</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <Icon type={'feather'} name="lock" color={'#4C4C4C'} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionListItemTitle}>Outstanding</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    </View>
                </ListItem.Accordion>

                <ListItem containerStyle={styles.listItemContainer} bottomDivider>
                    <Icon name="bell" type="feather" color={'#000000'} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listItemTitle}>Notification</ListItem.Title>
                    </ListItem.Content>
                    <Badge value="3" status="error" />
                </ListItem>

                <ListItem containerStyle={styles.listItemContainer} bottomDivider>
                    <Icon name="settings" type="feather" color={'#000000'} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listItemTitle}>Settings</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem containerStyle={styles.listItemContainer} bottomDivider>
                    <Icon name="arrow-down-circle" type="feather" color={'#000000'} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listItemTitle}>Download Ledger</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem containerStyle={styles.listItemContainer}>
                    <Icon name="log-out" type="feather" color={'red'} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.logoutTitle}>Logout</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </ScrollView>
            <Image
                source={require('../assets/gray-wheet.png')}
                resizeMode={'cover'}
                style={styles.backgroundImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    scrollViewContainer: {
        padding: 25,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: "row",
    },
    avatarContainer: {
        backgroundColor: '#367BBF',
        height: 60,
        width: 60,
    },
    profileTextContainer: {
        flex: 8,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: '#367BBF',
        lineHeight: 32
    },
    phone: {
        fontSize: 13,
        color: '#4C4C4C',
        fontWeight: '400',
        lineHeight: 17
    },
    kycCompletion: {
        color: 'green',
    },
    listItemContainer: {
        paddingVertical: 25,
    },
    listItemTitle: {
        color: '#000000',
        fontWeight: '600',
    },
    accordionContainer: {
        paddingVertical: 25,
        gap: 15,
    },
    accordionContentContainer: {
        paddingLeft: 35,
    },
    accordionListItemTitle: {
        color: '#4C4C4C',
    },
    logoutTitle: {
        color: 'red',
        fontWeight: '600',
    },
    backgroundImage: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        width: '100%',
    }
});

export default SideMenu;
