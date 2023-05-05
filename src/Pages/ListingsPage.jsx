import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import PageLayout from '../Components/PageLayout';
import Card from '../Components/Card';
import {data} from '../utilities/data';


class ListingsPage extends Component {
    state={
        data:[]
    }
    componentDidMount(){
        this.setState({data:data()})
    }
    render() {
        return (
            <PageLayout style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id || 100}
                    refreshing={false}
                    onRefresh={()=>console.log('Refreshed')}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('listDetailsPage', item)}>
                            <Card image={item.image} title={item.title} subTitle={'Rs ' + item.subTitle} uri={(item.uri)&&item.uri[0]} />
                        </TouchableOpacity>
                    )}
                />
            </PageLayout>
        );
    }
}

const styles = StyleSheet.create({
    container:{
       paddingHorizontal:20
    }
})

export default ListingsPage;