import React, { Component } from 'react';

const MyContext = React.createContext();


class MyProvider extends Component {
    state = {
        name: 'robin',
        settings:  {
            passYd: 25,
            passTD: 4,
            int: -1,
            reception: .5,
            recYd: 10,
            recTD: 6,
            rushYd : 10,
            rushTD: 6,
            fumbleLost: -2,
            twoPoint: 2
        },
    }

    render() {
        return (
            <MyContext.Provider value='im the value'>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;
