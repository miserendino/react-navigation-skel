import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styles } from '../../styles/styles.js';

export default function Screen2( {navigation} ) {
    return (    
    <View style={styles.center}>
        <Text style={styles.title}>Favorites</Text>
    </View>
    );
}