import React, { component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { styles } from './styles/styles';
import { NavigationContainer } from '@react-navigation/native';

export default Feed = (props) => {
    console.log(props);
/*     if (props.route.params.data){

    } */
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Navigation Drawer</Text>
                <Button
                    title='Go to Feed Item'
                    onPress={() => {
                        props.navigation.navigate('Detail', {screenName: "My Detail Screen"});
                    }}
                    />
        </View>
    );
}