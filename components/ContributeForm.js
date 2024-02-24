import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";

import Campaign from "../ethereum/campaign";

class ContributeForm extends Component {
    state = {
        value: "",
        isLoading: false,
        errorMessage: "",
    };

    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({ isLoading: true, errorMessage: "" });

        const campaign = Campaign(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .contribute() // add params
                .send({
                    from: accounts[0],
                    // gas: "1000000",
                });
        } catch (error) {
            console.log(
                "Error contributing to the campaign -->",
                JSON.stringify(error, null, 2)
            );

            this.setState({
                errorMessage:
                    error.message ??
                    "Sorry, something went wrong please try again later",
                isLoading: false,
            });
        }

        this.setState({ isLoading: false });
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        label="ether"
                        labelPosition="right"
                        value={this.state.value}
                        onChange={(e) =>
                            this.setState({ value: e.target.value })
                        }
                    />
                </Form.Field>
                <Button
                    style={{
                        backgroundColor: "purple",
                        color: "white",
                    }}
                >
                    Contribute!
                </Button>
            </Form>
        );
    }
}

export default ContributeForm;
