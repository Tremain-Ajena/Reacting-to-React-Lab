import React, { Component } from 'react';
// WHEN YOU CREATE A FUNCTION OR CLASS IN REACT, THE NAME OF THE FUNCTION OR CLASS MUST BE THE SAME AS THE DOCUMENT NAME
// BECAUSE WHEN YOU EXPORT AND IMPORT, YOU ARE ONLY EXPORTING OR IMPORTING THE FUNCTION OR CLASS NOT THE ENTIRE FILE.
class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'React is difficult.',
            // text: this.props.title,
            // this.props.title,
            newProperty: '',
            hasLoaded: false,
        }
        // I set the 'text' state to the 'title' prop and removed the (props) parameter from the constructor & super and the
        // words displayed on the page was from the 'title' prop passed through the App in the index instead of the actual
        // string it's set to. However, when the (props) parameter is removed & the 'text' state is set to 'this.props.title'
        // the page throws an error that says 'title of undefined cannot be read'
        // 'states' are still 'props', they are just the state of a prop at one instance; they can be passed to a child as well.
    }
    handleInputChange(value) {
        this.setState({ newProperty: value })
        console.log({ newProperty: value })
    }
    handleClick() {
        this.setState({ hasLoaded: true })
    }
    componentDidMount() {
        this.setState({ hasLoaded: true })
    }
    // having the 'componentDidMount' function does not allow py react page to ever change into the designated 'Loading' page
    render() {
        if (this.state.hasLoaded === false) {
            return (<div>
                <h1>Loading</h1>
                <button onClick={() => this.handleClick()}>Click Me!</button>
                {/* the loading screen will appear first becuase the default value of hasLoaded is 'false' and clicking the button changes the value to 'true' */}
                {/* <button onClick={() => this.componentDidMount()}>Click Me!</button> */}
            </div>)
        } else {

            return (
                // You will NOT see a change in the displayed items unless you have multiple divs within the React.Fragment tag.
                // you can NOT use multiple div tags outside of a React.Fragment tag.
                // If you want to use seperate div tags in multiples, you have to wrap them in a React.Fragment tag
                <React.Fragment>
                    <h1>{this.props.title}
                        <div>
                            {this.state.text}
                        </div>
                    </h1>
                    <input
                        placeholder={this.state.text}
                        onChange={(event) => this.handleInputChange(event.target.value)}
                    />
                    <button onClick={() => this.handleClick()}>Click Me!</button>
                    {/* <button onClick={() => this.componentDidMount()}>Click Me!</button> */}
                    {/* the loading page does not appear when invoking the 'componentDidMount' function for the button event listener */}
                </React.Fragment>
            )
        }
    }
}
export default App2
// let App2 = (props) => {
//     // let header = (<h1 className='greeting'>How Are You?</h1>);
//     return (
//         <div>
//             <h1>{props.text}</h1>

//         </div>
//     );
// };
// export default App2;