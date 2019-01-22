import React, { Component } from 'react';
import axios from 'axios'

const MyContext = React.createContext();


class MyProvider extends Component {
    state = {
        name: 'robin',
        selectedWR: {}
    }


    handleOnClick = (first, last, id) => {
        console.log('wr click');
        console.log(first, last, id)
        let config = {
            auth: {
                username: 'e1c3c9b7-346a-4e73-a4ea-dc799d',
                password: 'MYSPORTSFEEDS'
              },
        };

        axios.get(`https://api.mysportsfeeds.com/v2.0/pull/nfl/2018-regular/player_gamelogs.json?player=${first}-${last}-${id}`, config)
            .then((response) => {
                // console.log(response.data)
                let updatedSelectedWR = Object.assign({}, this.state.selectedWR);
                updatedSelectedWR = response.data

                console.log(updatedSelectedWR)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <MyContext.Provider value={{state: this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;
