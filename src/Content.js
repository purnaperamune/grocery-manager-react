import React from 'react'
import ItemList from './ItemList'

const Content = ( {items} ) => {
    console.log(`Length is ${items.length}`)

    return (
        <div>
            <p>
                {items.length ? (
                    <ItemList
                        items={items}   
                    />
                ) : (
                    <p> List is empty </p>
                )}
            </p>
        </div>
    )
}

export default Content