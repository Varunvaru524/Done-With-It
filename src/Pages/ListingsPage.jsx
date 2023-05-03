import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PageLayout from '../Components/PageLayout';
import Card from '../Components/Card';
import jacket from '../assets/jacket.jpg'
import couch from '../assets/couch.jpg'
import chair from '../assets/chair.jpg'
import { TouchableOpacity } from 'react-native';


let data = [
    {
        id: 1,
        title: 'Red Jacked',
        subTitle: '600',
        image: jacket
    },
    {
        id: 2,
        title: 'Couch',
        subTitle: '10000',
        image: couch
    },
    {
        id: 3,
        title: 'Chair',
        subTitle: '2000',
        image: chair
    }
]

class ListingsPage extends Component {
    render() {
        return (
            <PageLayout style={{ padding: 20 }}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('listDetailsPage', item)}>
                            <Card image={item.image} title={item.title} subTitle={'$' + item.subTitle} />
                        </TouchableOpacity>
                    )}
                />
            </PageLayout>
        );
    }
}

export default ListingsPage;