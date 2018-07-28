import React from 'react';
import {View, Text} from 'react-native'
import {Card, Button} from 'react-native-elements'
import Deck from "./src/Deck";

const DATA = [
    {id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'},
    {id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'},
    {id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'},
    {id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'},
    {id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'},
    {id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'},
    {id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'},
    {id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'},
];

export default class App extends React.Component {
    renderCard(item, key) {
        return (
            <Card
                title={item.text}
                key={item.id}
                image={{uri: item.uri}}
            >
                <Text style={{marginBottom: 10}}>I can customize the text further</Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor="#03A9F4"
                    title="View Now!"
                />
            </Card>
        )
    }

    renderNoMoreCards() {
        return (
            <Card title='No More Cards'
            image={ {uri: 'https://images.unsplash.com/photo-1529268209110-62be1d87fe75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a8c68249e919a08c9fde5c451979266&auto=format&fit=crop&w=1050&q=80'}} >
            <Text style={{marginBottom: 10}}>No More Cards Available</Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor="#FF0000"
                    title="View Now!"
                />
            </Card>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                    <Deck
                        data={DATA}
                        renderCard={this.renderCard}
                        renderNoMoreCards={this.renderNoMoreCards}
                    />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
};



