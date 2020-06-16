import React, { component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { styles } from './styles/styles';

export default Detail = (props) => {
    console.log(props);
    return (
        <View style={styles.center}>
            <Text style={styles.title}>{props.route.params.screenName}</Text>
            <Button
                title='View Bottom Tabs'
                onPress={() => {
                    props.navigation.navigate('BottomTabs', {name: "param 1"});
                }}
                />
            <Button
                title='View Top Tabs'
                onPress={() => {
                    props.navigation.navigate('TopTabs', {name: "param 2"});
                }}
                />
            <Button
                title='Pass Data Back'
                onPress={() => {
                    props.navigation.navigate('Feed', {data: "Hello!"});
                }}
                />
        </View>
    );
}