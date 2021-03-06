import React, { Component } from 'react';
import {SHOP_DATA} from "./shop.data";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import MenuItem from "../../components/menu-item/MenuItem";

export default class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    };
    render() {
        return (
            <div>
                {this.state.collections.map(({id, ...collectionProps}) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))}
            </div>
        )
    }
}
