import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import {Song} from '../../types';

export type SongListItemProps = {
    song: Song
}

const SonglistItems = (props: SongListItemProps) => {
    const { song } = props;

    return (
        <View style={styles.container}>
            {/** Image Cover */}
            <Image source={{ uri: song.imageUri}} style={styles.image}/>
            {/** Title */}
            <View style={styles.rightContainer}>
                <Text style={styles.title}>
                    {song.title}
                </Text>

            {/**  Artist */}
                <Text style={styles.artist}>
                    {song.artist}
                </Text>
            </View>
        </View>
    );
}

export default SonglistItems;

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 24,
    }, 
    artist: {
        color: 'lightgrey',
        fontSize: 12,
    },

    container: {
        flexDirection: 'row',
        margin: 10
    },

    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },

    image: {
        height: 75,
        width: 75,
    }
})