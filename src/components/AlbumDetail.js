import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <View></View>
            <View>
                <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
            </View>
            
        </Card>
    );  
};

export default AlbumDetail;
