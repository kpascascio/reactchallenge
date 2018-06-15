import React , { Component } from 'react'; 

class List extends Component {

    constructor() {
        super();
        this.state = {
            item: '',
            items: ['bananas', 'funnelCackes']
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        const newItemsArray = this.state.items.concat(this.state.item)

        this.setState({
            items: newItemsArray
        })

        event.preventDefault()
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="item">Enter a item to pick up:</label>
                    <input type="text" id="item" name="item" onChange={this.onChange} />
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    { this.state.items.map((item, i) => {
                        return (
                            <li key={i}> {item} </li>
                        )
                    })}
                </ul>
            </div>
        )
    }


}

export default List; 