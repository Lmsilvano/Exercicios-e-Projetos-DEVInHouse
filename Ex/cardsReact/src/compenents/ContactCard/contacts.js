import React from 'react';


class Contacts extends React.Component {
    render() {
        return (

            <div className='c_cards'>
                {this.props.img}

                <div className="c_cardsContent">
                    <h3 className="name">{this.props.name}</h3>
                    <p className="desc">{this.props.desc}</p>

                </div>
            </div>


        )
    }
}

export default Contacts