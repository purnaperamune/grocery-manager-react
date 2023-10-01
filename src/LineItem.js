import React from 'react'
import { useState } from 'react'

const LineItem = ({item}) => {
    return (
        <li className="item">
            <input
                type="checkbox"
                checked={item.checked}
            />
            <label>
                {item.item}
            </label>
            
            
        </li>
    )
}

export default LineItem