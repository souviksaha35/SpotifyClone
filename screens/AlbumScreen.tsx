import { useRoute } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import Songlistitems from '../components/songlistitems';
import AlbumHeader from '../components/AlbumHeader';

const album = {
    id: '1',
    name: 'Good Vibes',
    numberOfLikes: 50,
    by: 'Spotify',
    imageUri: "https://downloads4djs.co.in/wp-content/uploads/2015/09/Main-Hoon-Hero-Tera-1024x1024.jpg",
    artistsHeadline: "HERO",
    songs: [{
        id: '1',
        imageUri: "https://downloads4djs.co.in/wp-content/uploads/2015/09/Main-Hoon-Hero-Tera-1024x1024.jpg",
        title: 'Main hoon tera hero',
        artist: 'Artif aslam',
    }, {
        id: '2',
        imageUri: "https://downloads4djs.co.in/wp-content/uploads/2015/09/Main-Hoon-Hero-Tera-1024x1024.jpg",
        title: 'Main hoon tera hero',
        artist: 'Artif aslam',
    }, {
        id: '3',
        imageUri: "https://downloads4djs.co.in/wp-content/uploads/2015/09/Main-Hoon-Hero-Tera-1024x1024.jpg",
        title: 'Main hoon tera hero',
        artist: 'Artif aslam',
    }]
}


const AlbumScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route)
    }, [])


    return (
        <View>
            <FlatList
            data={album.songs}
            renderItem={({ item }) => <Songlistitems song={item}/>}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => <AlbumHeader album={album} />}
            />
        </View>
    );
}

export default AlbumScreen;