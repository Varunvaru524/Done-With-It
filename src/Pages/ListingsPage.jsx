import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import PageLayout from '../Components/PageLayout';
import Card from '../Components/Card';
import jacket from '../assets/jacket.jpg'
import couch from '../assets/couch.jpg'


let data = [
    {
        id: 1,
        title: 'Red Jacked',
        subTitle: '100',
        image: jacket
    },
    {
        id: 2,
        title: 'Beautifun Couch',
        subTitle: '1000',
        image: couch
    }
]

class ListingsPage extends Component {
    render() {
        return (
            <PageLayout style={{padding:20}}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return <Card image={ item.image } title={item.title} subTitle={'$'+item.subTitle} />
                    }}
                />
            </PageLayout>
        );
    }
}

export default ListingsPage;