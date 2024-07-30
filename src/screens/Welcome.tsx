import { Card, Icon } from "@rneui/base";
import { useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import EclipseBgLayer from "../components/EclipseBgLayer";
import LinearGradient from "react-native-linear-gradient";



const Welcome = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <View style={styles.header}>
                        <LinearGradient
                            colors={['#728cc4', '#83BD56']}
                            style={{
                                borderRadius: 20,
                            }}
                        >
                            <Icon
                                color={"#fff"}
                                name="user"
                                type={"font-awesome"}
                                style={styles.userIcon}
                                size={25}
                            />
                        </LinearGradient>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SideMenu');
                            }}
                        >
                            <Icon
                                style={styles.statsIcon}
                                name="stats-chart"
                                type={"ionicon"}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchContainer}>
                        <TextInput
                            placeholder={"Search"}
                            style={styles.searchInput}
                            placeholderTextColor={'#575757'}
                        />
                        <TouchableOpacity style={styles.searchButton}>
                            <Icon size={25} name="search-outline" type="ionicon" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.paymentPendingContainer}>
                        <Text style={styles.paymentPendingText}>Payment Pending</Text>
                        <Card containerStyle={{ marginHorizontal: 0, borderRadius: 15 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                                <Text style={styles.ongoingBadge}>Ongoing</Text>
                                <Icon
                                    name={"chevron-forward-outline"}
                                    color={'#000000'}
                                    type={"ionicon"}
                                />
                            </View>
                            <Text style={styles.paymentIdText}>Payment ID :123456</Text>
                        </Card>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.twoGrid}>
                        <EclipseBgLayer height={180} width={170}>
                            <View style={styles.eclipseContainer}>
                                <Image
                                    resizeMode={"contain"}
                                    style={styles.eclipseImage}
                                    source={require('../assets/farmhouse.png')}
                                />
                                <Text style={styles.eclipseText}>Sourcing</Text>
                            </View>
                        </EclipseBgLayer>
                        <EclipseBgLayer height={180} width={170}>
                            <View style={styles.eclipseContainer}>
                                <Image
                                    resizeMode={"contain"}
                                    style={[styles.eclipseImage, { height: 90, width: 90 }]}
                                    source={require('../assets/farmstorage.png')}
                                />
                                <Text style={styles.eclipseText}>Storage</Text>
                            </View>
                        </EclipseBgLayer>
                    </View>
                    <View style={styles.twoGrid}>
                        <EclipseBgLayer height={180} width={170}>
                            <View style={styles.eclipseContainer}>
                                <Image
                                    resizeMode={"contain"}
                                    style={[styles.eclipseImage, { height: 100, width: 100 }]}
                                    source={require('../assets/finance.png')}
                                />
                                <Text style={styles.eclipseText}>Finance</Text>
                            </View>
                        </EclipseBgLayer>
                        <EclipseBgLayer height={180} width={170}>
                            <View style={[styles.eclipseContainer, { gap: 10 }]}>
                                <Image
                                    resizeMode={"contain"}
                                    style={[styles.eclipseImage, { height: 90, width: 90 }]}
                                    source={require('../assets/market-linkage.png')}
                                />
                                <Text style={styles.eclipseText}>Market Linkage</Text>
                            </View>
                        </EclipseBgLayer>
                    </View>
                    <EclipseBgLayer height={180}>
                        <View style={styles.eclipseContainer}>
                            <Image
                                resizeMode={"contain"}
                                style={styles.eclipseImage}
                                source={require('../assets/value-chain.png')}
                            />
                            <Text style={styles.eclipseText}>VCM - Value Chain Management</Text>
                        </View>
                    </EclipseBgLayer>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <View style={styles.columnContainer}>
                            <Image
                                resizeMode={"center"}
                                style={styles.gifImage}
                                source={require('../assets/warehouse.gif')}
                            />
                            <Text style={styles.gifText}>Warehouses</Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                resizeMode={"center"}
                                style={styles.gifImage}
                                source={require('../assets/bank.gif')}
                            />
                            <Text style={styles.gifText}>Banks</Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <Image
                                resizeMode={"center"}
                                style={styles.gifImage}
                                source={require('../assets/commodities.gif')}
                            />
                            <Text style={styles.gifText}>Commodities</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 50 }}>
                        <Text style={styles.nearbyWarehouseTitle}>Nearby Warehouses</Text>
                        <FlatList
                            scrollEnabled={false}
                            renderItem={() => (
                                <Card containerStyle={styles.cardContainer} wrapperStyle={{ flexDirection: "row", flex: 1 }}>
                                    <View style={styles.cardImageContainer}>
                                        <Image
                                            style={styles.cardImage}
                                            source={require('../assets/rise-storage.png')}
                                        />
                                    </View>
                                    <View style={styles.cardTextContainer}>
                                        <Text style={styles.cardTitle}>StoreSafe Warehouse</Text>
                                        <Text style={styles.cardSubtitle}>Vijaya Nagar, Velacheri, Chennai</Text>
                                    </View>
                                    <View style={styles.cardIconContainer}>
                                        <TouchableOpacity>
                                            <Icon
                                                name={"chevron-down-outline"}
                                                color={'#000000'}
                                                type={"ionicon"}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </Card>
                            )}
                            data={Array(2)}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.footerTextContainer}>
                            <Text style={styles.footerTitle}>S. Sakthi Kumar</Text>
                            <Text style={styles.footerSubtitle}>Digigrain Value Chain Manager</Text>
                        </View>
                        <View style={styles.footerContactContainer}>
                            <Icon name={"add-call"} color={'#FFFFFF'} type={"material"} size={16} />
                            <Text style={styles.footerContactText}>9345942220</Text>
                        </View>
                    </View>
                </View>
                <Image
                    source={require('../assets/warehouse-drawing.jpeg')}
                    resizeMode={'cover'}
                    style={styles.backgroundImage}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    contentContainer: {
        flexDirection: "column",
        padding: 20,
        rowGap: 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1
    },
    userIcon: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeText: {
        color: "#000000",
        fontWeight: '700',
        fontSize: 20,
        marginLeft: 15,
        flexGrow: 1
    },
    statsIcon: {
        transform: [{ scaleX: -1 }, { rotate: '270deg' }]
    },
    searchContainer: {
        backgroundColor: "#F1F0F6",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 7,
        height: 65
    },
    searchInput: {
        marginHorizontal: 10,
        width: "75%",
        color: "#575757",
        fontSize: 16,
        fontWeight: "400"
    },
    searchButton: {
        margin: 5,
        width: "15%"
    },
    paymentPendingContainer: {
        backgroundColor: "#EB57571C",
        marginHorizontal: -20,
        padding: 20,
        borderColor: '#EB5757',
        borderWidth: 1
    },
    paymentPendingText: {
        color: '#EB5757',
        fontSize: 20,
        fontWeight: "600"
    },
    ongoingBadge: {
        color: "#61903D",
        fontSize: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EFFFE6",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    paymentIdText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '600'
    },
    eclipseContainer: {
        flexGrow: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    eclipseImage: {
        flex: 8,
        height: 120,
        width: 120,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    eclipseText: {
        flex: 2,
        color: '#000000',
        fontSize: 17,
        fontWeight: '600',
    },
    columnContainer: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    twoGrid: {
        flexDirection: "row",
        justifyContent: "space-around",
        columnGap: 20
    },
    gifImage: {
        height: 100,
        width: 100
    },
    gifText: {
        color: "#000000",
        fontSize: 15,
        fontWeight: '500'
    },
    nearbyWarehouseTitle: {
        color: '#000000',
        fontWeight: '600',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    },
    cardContainer: {
        margin: 0,
        marginBottom: 20,
        borderRadius: 12,
        flexDirection: "row"
    },
    cardImageContainer: {
        flex: 2.5
    },
    cardImage: {
        height: 60,
        width: 70,
        borderRadius: 5
    },
    cardTextContainer: {
        flex: 6.5,
        justifyContent: "space-evenly"
    },
    cardTitle: {
        color: '#121212',
        fontSize: 17,
        fontWeight: '600'
    },
    cardSubtitle: {
        color: '#4C4C4C',
        fontSize: 13.5,
        fontWeight: '400'
    },
    cardIconContainer: {
        flex: 1,
        justifyContent: "center"
    },
    footer: {
        flexDirection: "row",
        backgroundColor: "#367BBF",
        marginHorizontal: -20,
        marginBottom: -20,
        padding: 30,
        justifyContent: "space-between"
    },
    footerTextContainer: {
        flexDirection: "column"
    },
    footerTitle: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20
    },
    footerSubtitle: {
        color: '#FFEEBB',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 20
    },
    footerContactContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10
    },
    footerContactText: {
        color: '#FFFFFF',
        fontSize: 13,
        lineHeight: 20,
        fontWeight: '400'
    },
    backgroundImage: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        zIndex: -1,
        opacity: 0.2,
        width: '100%'
    }
});

export default Welcome;
