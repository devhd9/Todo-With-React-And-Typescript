import { AddIcon } from '../Icons'
import styles from './AddItem.module.css'
import { AddItemPropType } from './AddItem.types'

function AddItem({setIsAddingItem}:AddItemPropType) {
  return (
    <div className={styles['add-button-container']}>
            <span onClick={()=>{setIsAddingItem(true)}} className='pointer-hover'>
                <AddIcon size='40' />
            </span>
        </div>
  )
}

export default AddItem