import React from 'react';

class RouletteGun extends React.Component {

    static defaultProps = {
        bulletInChamber: 8
    }
    
    state = {
        displayMessage: 'Ready to play?',
        chamber: null,
        spinningTheChamber: false
    };
    
    handleRouletteSpin = () => {
        this.setState({
            spinningTheChamber: true
        })
        let timeout = setTimeout( () => {
            console.log('Interval elapsed.')
            const luckyNumber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: luckyNumber,
                spinningTheChamber: false
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        
        let currentDisplay = ''
        
        if (this.state.spinningTheChamber === true) {
            currentDisplay = 'spinning the chamber...'
        } else {
            if (this.state.chamber === this.props.bulletInChamber) {
                currentDisplay = 'BANG!!!'
            } else {
                currentDisplay = "You're safe!"
            }
        }

        const behindTheScenes = `Bullet in Chamber # ${this.props.bulletInChamber}, and you got the ${this.state.chamber} chamber.`
        
        return (
            <div>
                {currentDisplay}
                <br />
                <button
                    onClick={this.handleRouletteSpin}
                >
                    Pull the trigger!
                </button>
                <br />
                {behindTheScenes}
            </div>
        )
    }

}

export default RouletteGun;