import { useState } from "react"
import { TickIcon } from "../Icons"
import { addItemInTodoListFuncType, currentItemDataType } from "../../Types/Types";

function OverlayInputForm({addItemInTodoList, isNewItem, currentItemData}:{addItemInTodoList:addItemInTodoListFuncType, isNewItem: boolean, currentItemData?: currentItemDataType}) {
  const [inputValue, setInputValue] = useState<string>(currentItemData ? currentItemData.title : "");
  function saveValue() {
    const dataObj = {
        isNewItem,
        title: inputValue,
        existingUniqueId: currentItemData?.id || null
    }
    addItemInTodoList(dataObj)
  }
  return (
    <div className="overlay" id="overlay">
            <div className="form-container form-width">
                <p>Add new todo</p>
                <div className="input-container">
                    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" id="title" className="input-field" onKeyDown={(e)=>{ if(e.key === 'Enter') saveValue()}} />
                    <label htmlFor="title" className="input-label">Title*</label>
                </div>
                <div style={{textAlign: 'center', marginTop: '10px'}}>
                    <span onClick={saveValue} className='tick-icon pointer-hover'>
                        <TickIcon size='30'/>
                    </span>
                </div>
            </div>
        </div>
  )
}

export default OverlayInputForm