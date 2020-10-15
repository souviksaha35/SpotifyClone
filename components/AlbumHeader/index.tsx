import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Album } from '../../types';

export type AlbumHeaderProps = {
    album: Album;
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props;
    return (
       <View style={styles.container}>
           {/** Cover image */}
           <Image source={{ uri: album.imageUri }} style={styles.image}/>
           {/** Name */}
           <Text style={styles.name}>
               {album.name}
           </Text>
           {/** Creator */}
           <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>
                    {album.numberOfLikes} Likes
                </Text>
           </View>
           {/** Number of Likes */}
           {/**  Play button */}
           <TouchableOpacity>
               <View style={styles.button}>
                   <Text style={styles.buttonText}>
                       PLAY
                   </Text>
               </View>
           </TouchableOpacity>
       </View>
    );
}

export default AlbumHeader;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    }, 
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },

    creatorContainer: {
        flexDirection: 'row',
        margin: 10,
    },

    creator: {
        color: 'lightgrey',
        margin: 5,
        
    },
    likes: {
        color: 'lightgrey',
        margin: 5,
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 60,
        width: 175,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'lightgrey',
        fontWeight: 'bold',
        fontSize: 20,
    },
})