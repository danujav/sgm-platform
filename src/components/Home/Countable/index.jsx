import { Typography } from "@mui/material";
import React, { Component } from "react";
import Button from '@mui/material/Button';
import GDSEButton from "../../common/Button";

class Countable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    incrementCount() {
        console.log("increment function calling");
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount() {
        console.log("decrement function calling");
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount() {
        console.log("reset function calling");
        this.setState({
            count: 0
        })
    }

    render() {
        const count = 0;
        return (
            <div>
                <Typography variant="h4" gutterBottom>
                    Count: {this.state.count}
                </Typography>
                {/* <Button
                    variant="contained"
                    onClick={() => {
                        console.log('Increase button clicked!')
                        this.incrementCount()

                    }}
                >
                    Increase!
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        console.log('Decrease button clicked!')
                        this.decrementCount()

                    }}
                    style={{marginLeft: '15px'}}
                >
                    Decrease!
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                        console.log('Reset button clicked!')
                        this.resetCount()

                    }}
                    style={{marginLeft: '15px'}}
                >
                    Reset!
                </Button> */}

                <GDSEButton 
                    label="Increase!"
                    variant="contained"
                    onClick={() => {
                        console.log('Increase button clicked!')
                        this.incrementCount()

                    }}
                />
                <GDSEButton 
                    label="Decrease!"
                    variant="outlined"
                    onClick={() => {
                        console.log('Decrease button clicked!')
                        this.decrementCount()

                    }}
                    style={{marginLeft: '15px'}}
                />
                <GDSEButton 
                    label="Reset!"
                    variant="outlined"
                    color="error"
                    // disabled={true}
                    onClick={() => {
                        console.log('Reset button clicked!')
                        this.resetCount()

                    }}
                    style={{marginLeft: '15px'}}
                />
            </div>
        )
    }
}
export default Countable