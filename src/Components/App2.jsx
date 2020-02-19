import React, { Component } from 'react';
// WHEN YOU CREATE A FUNCTION OR CLASS IN REACT, THE NAME OF THE FUNCTION OR CLASS MUST BE THE SAME AS THE DOCUMENT NAME
// BECAUSE WHEN YOU EXPORT AND IMPORT, YOU ARE ONLY EXPORTING OR IMPORTING THE FUNCTION OR CLASS NOT THE ENTIRE FILE.
class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'React is difficult.',
            newProperty: '',
            hasLoaded: false,
        }
        // this.text = 'Hi, thanks for the stars in the sky. We enjoy long walks in the dark and gazing at the twilight.';
    }
    handleInputChange(value) {
        this.setState({ newProperty: value })
        console.log({ newProperty: value })
    }
    handleClick() {
        this.setState({ hasLoaded: true })
    }
    render() {
        if (this.state.hasLoaded === false) {
            return (<div>
                <h1>Loading</h1>
                <button onClick={() => this.handleClick()}>Click Me!</button>

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