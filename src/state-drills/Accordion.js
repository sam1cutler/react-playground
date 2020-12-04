import React from 'react';

class Accordion extends React.Component {
    
    static defaultProps = { sections: [] }
    
    state = {
        currentSectionIndex: null
    }

    handleButtonClick = (index) => {
        this.setState( {currentSectionIndex: index } )
    }
    
    renderContent = (index) => {
        if (index === this.state.currentSectionIndex) {
            return this.props.sections[index].content
        } 
    }

    renderList() {
        return this.props.sections.map( (item, index) => (
            <li 
                key={index} 
                onClick={ () => this.handleButtonClick(index) }
            >
                <button>{item.title}</button>
                <p>{this.renderContent(index)}</p>
            </li>
        ))
    }
    
    render() {
        
        return (
            <div>
                <h2>Accordion!</h2>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

export default Accordion;