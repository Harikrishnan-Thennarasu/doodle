import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, Button, Icon, Divider, Image } from '@rneui/base';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartRequest, removeFromCartRequest } from '../redux/actions/cartAction';

const MyCart = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items);

    const handleIncreaseQuantity = (id: string) => {
        dispatch(addToCartRequest(id));
    };

    const handleDecreaseQuantity = (id: string) => {
        dispatch(removeFromCartRequest(id));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <ListItem onPress={() => navigation.navigate('CartDetails', { item: item })} bottomDivider>
                        <Image
                            source={{ uri: item.imageUrl }}
                            containerStyle={styles.item}
                            resizeMode={"contain"}
                        />
                        <ListItem.Content style={styles.listItemContent}>
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>COLOR: {item.color} SIZE: {item.size}</ListItem.Subtitle>
                            <View style={styles.quantityContainer}>
                                <Button
                                    icon={<Icon name="minus" type="font-awesome" size={12} color="white" />}
                                    buttonStyle={styles.quantityButton}
                                    onPress={() => handleDecreaseQuantity(item.id)}
                                />
                                <Text style={styles.quantityText}>{item.quantity}</Text>
                                <Button
                                    icon={<Icon name="plus" type="font-awesome" size={12} color="white" />}
                                    buttonStyle={styles.quantityButton}
                                    onPress={() => handleIncreaseQuantity(item.id)}
                                />
                            </View>
                        </ListItem.Content>
                        <Text style={styles.price}>${item.price * item.quantity}</Text>
                    </ListItem>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    listItemContent: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    quantityButton: {
        backgroundColor: '#007bff',
        borderRadius: 4,
        paddingHorizontal: 5,
    },
    quantityText: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
    summaryContainer: {
        paddingBottom: 10,
    },
    summaryText: {
        fontSize: 16,
        marginVertical: 5,
    },
    footerContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    totalText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'right',
        marginBottom: 10,
    },
    divider: {
        marginVertical: 10,
    },
    couponContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    couponInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
    },
    applyButton: {
        backgroundColor: '#000',
        marginLeft: 10,
        borderRadius: 5,
    },
    freeShippingButton: {
        marginTop: 10,
        borderColor: '#e0e0e0',
    },
    iconContainer: {
        marginLeft: 5,
    },
});

export default MyCart;
