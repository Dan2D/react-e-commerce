import React, { Component } from 'react';
import {sections} from "./directory.data";

import MenuItem from "../menu-item/MenuItem";
import "./directory.styles.scss";

export default class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections: sections,
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => ( 
                            <MenuItem key={id} {...otherSectionProps} />
                        )
                    )
                }
            </div>
        )
    }
}
