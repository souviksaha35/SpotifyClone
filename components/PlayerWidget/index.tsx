import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../constants/Colors';
import {AntDesign, FontAwesome} from '@expo/vector-icons';

const song = {
    id: '1',
    imageUri: "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/430452243-306x393.jpg",
    title: "High on You",
    artist: 'Artif Aslam'
}

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            {/** Image Cover */}
            <Image source={{ uri: song.imageUri}} style={styles.image}/>
            {/** Title */}
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>
                        {song.title}
                    </Text>

            {/**  Artist */}
                    <Text style={styles.artist}>
                        {song.artist}
                    </Text>
                </View>

                <View style={styles.iconsContainer}>
                    <AntDesign name="hearto" size={30} color={"white"}/>
                    <FontAwesome name="play" size={30} color={"white"}/>
                </View>
            </View>
        </View>
    );
}

export default PlayerWidget;

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    }, 
    artist: {
        color: 'lightgrey',
        fontSize: 12,
    },

    container: {
        flexDirection: 'row',
        position: 'absolute',
        marginBottom: -41,
        bottom: 90,
        backgroundColor: '#131313',
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
        alignItems: 'center',
    },

    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },

    image: {
        height: 75,
        width: 75,
        marginRight: 10,
    }
})