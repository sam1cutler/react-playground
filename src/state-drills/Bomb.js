import React from 'react';

class Bomb extends React.Component {

    state = {
        count: 0,
        bombSound: 'tick'
    };

    componentDidMount() {
        function determineBombSound(currentCount) {
            if (currentCount >= 8) {
                return 'BOOM!!!!'
            } else {
                if (currentCount % 2 === 0) {
                    return 'tick'
                } else {
                    return 'tock'
                }
            }
        }
        
        this.interval = setInterval( () => {
            const newCount = this.state.count + 1;
            const newBombSound = determineBombSound(newCount);

            this.setState({
                count: newCount,
                bombSound: newBombSound
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <p>{this.state.bombSound}</p>
            </div>
        )
    }

}

export default Bomb;