import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import PageLayout from '../Components/PageLayout';
import ListItem from '../Components/ListItem';
import ListItemSeparetor from '../Components/ListItemSeparetor';
import {data} from '../utilities/data';


class MessagesPage extends Component {
    render() {
        return (
            <PageLayout>
                <View style={{ height: '100%' }}>
                    <FlatList
                        data={data()}
                        keyExtractor={data => data.id}
                        renderItem={({ item }) => {
                            return <ListItem title={item.title} subTitle={'Description'} image={item.image} uri={(item.uri)&&item.uri[0]} onPress={() => console.log('clicked', item)} onDelete={() => console.log('deteted')} />
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