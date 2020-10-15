import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Album from '../components/album';
import AlbumCategory from '../components/AlbumCategory';
import {albumCategory} from '../data/albumCategories';



export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <FlatList
            data={albumCategory}
            renderItem={({ item }) => <AlbumCategory title={item.title} albums={item.albums}/>} keyExtractor={( item ) => item.id}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    text: {
        backgroundColor: 'white'
    }
})