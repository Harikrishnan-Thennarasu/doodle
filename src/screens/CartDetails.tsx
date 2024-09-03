import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from '@rneui/base';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartRequest, removeFromCartRequest } from '../redux/actions/cartAction';

const CartDetails = ({ route }: any) => {
    const itemID = route?.params?.item?.id;

    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items);

    const item = cartItems.find((ele: any) => ele.id === itemID);

    const handleIncreaseQuantity = (id: string) => {
        dispatch(addToCartRequest(id));
    };

    const handleDecreaseQuantity = (id: string) => {
        dispatch(removeFromCartRequest(id));
    };
    return (
        <View style={styles.container}>
            <Image resizeMode={"contain"} source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.info}>COLOR: {item.color}</Text>
            <Text style={styles.info}>SIZE: {item.size}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.quantityContainer}>
                <Button
                    icon={<Icon name="minus" type="font-awesome" size={20} color="white" />}
                    buttonStyle={styles.quantityButton}
                    onPress={() => handleDecreaseQuantity(item.id)}
                />
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <Button
                    icon={<Icon name="plus" type="font-awesome" size={20} color="white" />}
                    buttonStyle={styles.quantityButton}
                    onPress={() => handleIncreaseQuantity(item.id)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 18,
        color: '#888',
        marginBottom: 5,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    quantityButton: {
        backgroundColor: '#007bff',
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    quantityText: {
        marginHorizontal: 20,
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default CartDetails;
