import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import PageLayout from '../Components/PageLayout';
import Card from '../Components/Card';
import data from '../utilities/data';


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