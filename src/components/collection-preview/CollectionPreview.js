import React from 'react';

import CollectionItem from "../collection-item/CollectionItem";
import "./collection-preview.styles.scss";

//Any time this component re-renders it will map through every item, performance concern
function CollectionPreview({title, items}) {
    return (
        <div className="collection-preview">
            <h1 className="preview-title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem id={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;
