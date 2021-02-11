import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const albumesRecientes = ({albumId, title,image}) => {
    return(
        <View style={styles.container}>
            <Text>Álbum: {albumId}</Text>
            <Text>Titulo: {title}</Text>
            <Text>Imagen: {image}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignSelf: "center",
    }
});

export default albumesRecientes;