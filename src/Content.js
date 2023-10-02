import React from 'react'
import ItemList from './ItemList'

const Content = ( {items, handleCheck, handleDelete} ) => {
    console.log(`Length is ${items.length}`)

    return (
        <div>
            <p>
                {items.length ? (
                    <ItemList
                        items={items}  
                        handleCheck = {handleCheck}
                        handleDelete = {handleDelete}

                    />
                ) : (
                    <p> List is empty </p>
                )}
            </p>
        </div>
    )
}

export default Content