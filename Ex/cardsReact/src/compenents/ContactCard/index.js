import { Avatar } from '@bigheads/core';
import React from 'react';
import Contacts from './contacts'
import { data } from './Data'




class ContactCard extends React.Component {
    render() {
        return (
            <div className="contactCard">
                {data.map((cc, i) => {
                    return (
                        <Contacts key={i} img={<Avatar />} name={cc.name} desc={cc.desc} />
                    )
                })}

            </div>
        )
    }
}
export default ContactCard
