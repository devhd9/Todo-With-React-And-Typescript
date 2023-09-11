import { useState } from "react"
import { TickIcon } from "../Icons"
import styles from './OverlayInputForm.module.css'
import { OverlayInputFormPropType } from "./OverlayInputForm.types";

function OverlayInputForm({addItemInTodoListHandler, isNewItem, currentItemData}:OverlayInputFormPropType) {
  const [inputValue, setInputValue] = useState<string>(currentItemData ? currentItemData.title : "");
  function saveValue() {
    const dataObj = {
        isNewItem,
        title: inputValue,
        existingUniqueId: currentItemData?.id || null
    }
    addItemInTodoListHandler(dataObj)
  }
  return (
    <div className={`${styles.overlay} pointer-hover"`} id="overlay">
            <div className={`${styles['form-container']} ${styles['form-width']}`}>
                <p>Add new todo</p>
                <div className={styles['input-container']}>
                    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" id="title" className={styles["input-field"]} onKeyDown={(e)=>{ if(e.key === 'Enter') saveValue()}} />
                    <label htmlFor="title" className={styles["input-label"]}>Title*</label>
                </div>
                <div style={{textAlign: 'center', marginTop: '10px'}}>
                    <span onClick={saveValue} className={`${styles['tick-icon']} pointer-hover`}>
                        <TickIcon size='30'/>
                    </span>
                </div>
            </div>
        </div>
  )
}

export default OverlayInputForm