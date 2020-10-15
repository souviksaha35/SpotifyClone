import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import {Album} from '../../types';
import AlbumComponent from '../album';


export type AlbumCatgoryProps = {
    title: string,
    albums: [Album]
}

const AlbumCategory = (props: AlbumCatgoryProps) => {
    return (
        <View style={styles.container}> 
        {/** Title of category */}
            <Text style={styles.title}>
                {props.title}
            </Text>
        {/** List of albums */}
            <FlatList
            data={props.albums}
            renderItem={({ item }) => <AlbumComponent album={item}/>}
            keyExtractor={( item ) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            />
        </View>
    );
}

export default AlbumCategory;

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
})