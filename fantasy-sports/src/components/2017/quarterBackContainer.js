import React from 'react';
import axios from 'axios';
import Quarterback from './quarterBack';

export default class QuarterBackContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            QB: [],
            stats:  {
                passYards: 25,
                passTD: 4,
                interceptions: -1,
                rushYards : 10,
                rushTD: 6,
                fumbleLost: -2,
            }
        }
    }

    componentDidMount() {
        console.log('Quarterback container mounted!');
        this.getCumulativeStats();
    }

    getCumulativeStats = () => {
        const config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/cumulative_player_stats.json?position=QB&&playerstats=Passing.td,Passing.att,Passing.yds,Passing.int,Rushing.td,Rushing.att,Rushing.yds,Fumbles.lost,2PT.2PTMade", config)
            .then((response) => {
                // console.log(response.data['cumulativeplayerstats']['playerstatsentry'])
                let updatedQB = Object.assign({}, this.state.QB)

                updatedQB = response.data['cumulativeplayerstats']['playerstatsentry']

                // console.log(updatedQB)
                this.setState({
                    QB: updatedQB
                })
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    onGetGameLogs = (first,last,ID) => {
        console.log('click')
        const config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              },
        };
        axios.get(`https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/player_gamelogs.json?player=${first}-${last}-${ID}&&playerstats=Passing.td,Passing.att,Passing.yds,Passing.int,Rushing.td,Rushing.yds,Fumbles.lost,2PT.2PTMade`, config)
            .then((response) => {
                console.log(response.data)
            })

    }


    getFantasyPoints = (pYds, pTD, int, rYds, rTD, fumL) => {
        let totalPoints = 0;

        totalPoints += pYds / this.state.stats.passYards
        totalPoints += pTD * this.state.stats.passTD
        totalPoints += int / this.state.stats.interceptions
        totalPoints += rYds / this.state.stats.rushYards
        totalPoints += rTD * this.state.stats.rushYards
        totalPoints += fumL * this.state.stats.fumbleLost

        return Math.ceil(totalPoints * 100) / 100
    }

    render() {
        return (
            <div>
                <h1>All the 2017 QB Players</h1>

                {this.state.QB.map((player, key) => {
                    let passAttempts = player.stats.PassAttempts['#text']
                    let passYards = player.stats.PassYards['#text']
                    let interceptions = player.stats.PassInt['#text']
                    let passTD = player.stats.PassTD['#text']
                    let rushAttempts = player.stats.RushAttempts['#text']
                    let rushYards = player.stats.RushYards['#text']
                    let rushTD = player.stats.RushTD['#text']
                    let fumLost = player.stats.FumLost['#text']

                    return <Quarterback
                        key={key}
                        position='QB'
                        firstname={player.player.FirstName}
                        lastname={player.player.LastName}
                        passAttempts= { passAttempts }
                        passYards= { passYards }
                        interceptions= { interceptions }
                        passTD= { passTD }
                        rushAttempts= { rushAttempts }
                        rushYards= { rushYards }
                        rushTD= { rushTD }
                        fumLost= { fumLost }
                        playerID= { player.player.ID}
                        getGameLogs= { this.onGetGameLogs }

                        fantasyPoints = { this.getFantasyPoints(passYards, passTD, interceptions, rushYards, rushTD, fumLost)}/>
                }
                )}
            </div>
        );
    }
}
