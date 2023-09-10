import { PencilIcon, TrashIcon } from "../Icons"
import { deleteItemHandlerFuncType, editItemFuncType, todoItemType, toggleItemMarkedCompletedFuncType } from "../../Types/Types"

function TodoItems({displayItems, editItem, deleteItemHandler, toggleItemMarkedCompleted}: {displayItems: todoItemType[], editItem:editItemFuncType, deleteItemHandler:deleteItemHandlerFuncType, toggleItemMarkedCompleted:toggleItemMarkedCompletedFuncType}) {
  return (
    <div>
            {
                displayItems.map(({title, id, isCompleted})=>{
                    return <div key={id} className='todo-item-container container'>
                        <input type="checkbox" name="" id="" className='pointer-hover' checked={isCompleted} onChange={()=>toggleItemMarkedCompleted(id)} />
                        <div className={`todo-item-title ${isCompleted ? "line-through": ""}`}>{title}</div>
                        <div className='todo-item-action-icon-container'>
                            <span onClick={()=>editItem(id, title)} className='todo-item-action-icon pencil-icon pointer-hover'>
                                <PencilIcon />
                            </span>
                            <span onClick={()=> deleteItemHandler(id)} className='todo-item-action-icon trash-icon pointer-hover'>
                                <TrashIcon />
                            </span>
                        </div>
                    </div>
                })
            }
        </div>
  )
}

export default TodoItems