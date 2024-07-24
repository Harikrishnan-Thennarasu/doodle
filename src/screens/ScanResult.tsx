import Clipboard from "@react-native-clipboard/clipboard";
import { Button, Icon, ListItem } from "@rneui/base";
import { useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";

const ScanResult = ({ route }: any) => {
    const { params } = route;

    const copyToClipboard = (value: any) => {
        Clipboard.setString(value);
        Alert.alert("Copied to Clipboard", value);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={params?.codes || []}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ListItem bottomDivider>
                        <Icon name="qrcode" type="font-awesome" />
                        <ListItem.Content>
                            <ListItem.Title>{item.value}</ListItem.Title>
                        </ListItem.Content>
                        <Button
                            title="Copy"
                            onPress={() => copyToClipboard(item.value)}
                        />
                    </ListItem>
                )}
                style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default ScanResult;