import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import PageLayout from '../Components/PageLayout';
import ListItem from '../Components/ListItem';
import ListItemSeparetor from '../Components/ListItemSeparetor';
import img from '../assets/jacket.jpg'
import data from '../utilities/data';


class MessagesPage extends Component {
    render() {
        return (
            <PageLayout>
                <View style={{ height: '100%' }}>
                    <FlatList
                        data={data}
                        keyExtractor={data => data.id}
                        renderItem={({ item }) => {
                            return <ListItem title={item.title} subTitle={item.description} image={item.image} onPress={() => console.log('clicked', item)} onDelete={() => console.log('deteted')} />
                        }}
                        ItemSeparatorComponent={<ListItemSeparetor />}
                        refreshing={false}
                        onRefresh={() => console.log('refreshed')}
                    />
                </View>
            </PageLayout>
        );
    }
}

export default MessagesPage;