import React from 'react'
import { AddIcon } from '../Icons'
import { setIsAddingItemFuncType } from '../../Types/Types'

function AddItem({setIsAddingItem}:{setIsAddingItem:setIsAddingItemFuncType}) {
  return (
    <div className='add-button-container'>
            <span onClick={()=>{setIsAddingItem(true)}} className='pointer-hover'>
                <AddIcon size='40' />
            </span>
        </div>
  )
}

export default AddItem