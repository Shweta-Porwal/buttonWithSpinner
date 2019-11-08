import React from 'react';
import {Button, Text} from 'native-base';
import {ActivityIndicator} from "react-native";

export default class SaveButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    renderButton(title) {
        return (
            <Button block
                    onPress={() => {
                        console.log("Reset button clicked");
                        this.setState({isLoading: true});
                        this.props.onButtonPress(true);
                    }}

                    style={[this.props.buttonStyle]}>
                <Text>{title}</Text>
            </Button>
        );
    }

    renderActivityIndicator() {
        return (<ActivityIndicator animating={this.state.isLoading} size='large' color='white'/>);
    }

    render() {
        this.state.isLoading = this.props.isLoading;

        if (!this.props.isLoading) {
            return this.renderButton(this.props.title)
        } else {
            return this.renderActivityIndicator()
        }
    }
}

