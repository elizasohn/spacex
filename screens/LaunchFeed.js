import { View } from 'react-native';
import SpaceList from '../components/SpaceList';

export default function SpaceFeed() {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <SpaceList
                    // data={feedPosts} 
                />
            </View>
        </View>
    );
}