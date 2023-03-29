import React, { Component } from 'react';
import { FlatList, View} from 'react-native';
import PageLayout from '../Components/PageLayout';
import ListItem from '../Components/ListItem';
import img from '../assets/jacket.jpg'


const data = [
    {
        id: 1,
        title: 'title1',
        description: 'Description',
        image: img
    },
    {
        id: 2,
        title: 'title2',
        description: 'Description',
        image: img
    },
]


class MessagesPage extends Component {
    render() {
        return (
            <PageLayout>
                <View>
                    <FlatList
                        data={data}
                        keyExtractor={data => data.id}
                        renderItem={({ item }) => {
                            return <ListItem title={item.title} subTitle={item.description} image={item.image} />
                        }}
                    />
                </View>
            </PageLayout>
        );
    }
}

export default MessagesPage;