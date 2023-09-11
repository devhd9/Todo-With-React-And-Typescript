import { useState } from 'react'
import uuid from 'uuidv4';
import AddItem from './AddItem';
import AppIcon from '../AppIcon';
import OverlayInputForm from '../OverlayInputForm';
import SectionSelector from '../SectionSelector';
import TodoItems from '../TodoItems';
import { addItemInTodoListFuncType, currentItemDataType, deleteItemHandlerFuncType, editItemFuncType, todoItemType, toggleItemMarkedCompletedFuncType } from '../../Types/Types';

export default function TodoDisplay() {
    const [todoData, setTodoData] = useState<todoItemType[]>([]);
    const [isAddingItem, setIsAddingItem] = useState<boolean>(false);
    const [isEditingItem, setIsEditingItem] = useState<boolean>(false);
    const [showDoneSection, setShowDoneSection] = useState<boolean>(false);
    const [currentItemData, setCurrentItemData] = useState<currentItemDataType>({id: "", title: ""});

    const displayItems = showDoneSection ? todoData.filter(({isCompleted})=> isCompleted) : todoData.filter(({isCompleted})=> !isCompleted);

    const localStorageData = localStorage.getItem('todoData')
    if (todoData.length === 0 && (typeof localStorageData === 'string') && localStorageData !== '[]') {
        todoDataSaveHandler(JSON.parse(localStorageData));
    }

    function todoDataSaveHandler(data: todoItemType[]) {
        setTodoData(data);
        localStorage.setItem('todoData', JSON.stringify(data));
    }

    const addItemInTodoList:addItemInTodoListFuncType = ({isNewItem, title, existingUniqueId}) => {
        if (title.trim()) {
            if (isNewItem) {
                const newData = [...todoData, {title, id: uuid(), isCompleted: false}]
                todoDataSaveHandler(newData);
                setIsAddingItem(false);
            } else {
                const newTodoData = todoData.map((dataObj)=>{
                    if (dataObj.id === existingUniqueId) {
                        dataObj.title = title
                    }
                    return dataObj;
                })
                todoDataSaveHandler(newTodoData);
                setIsEditingItem(false);
            }
        }
    }

    const editItem: editItemFuncType = (uniqueId, currentTitle) => {
        setIsEditingItem(true);
        setCurrentItemData({
            id: uniqueId,
            title: currentTitle
        })
    }

    const deleteItemHandler: deleteItemHandlerFuncType = (uniqueId) => {
        const newData = todoData.filter(({id})=> id !== uniqueId)
        todoDataSaveHandler(newData);
    }

    const toggleItemMarkedCompleted: toggleItemMarkedCompletedFuncType = (id) => {
        const newData = todoData.map((obj)=>{
                if (obj.id === id) obj.isCompleted = !obj.isCompleted;
                return obj;
            })
        todoDataSaveHandler(newData)
    }

  return (
    <div className='todo-app-box todo-app-box-width'>
        <AppIcon />
        <SectionSelector showDoneSection={showDoneSection} setShowDoneSection={setShowDoneSection} />
        <TodoItems displayItems={displayItems} editItem={editItem} deleteItemHandler={deleteItemHandler} toggleItemMarkedCompleted={toggleItemMarkedCompleted} />
        <AddItem setIsAddingItem={setIsAddingItem} />
        {
            isAddingItem ? <OverlayInputForm addItemInTodoList={addItemInTodoList} isNewItem={true} /> : <></>
        }
        {
            isEditingItem ? <OverlayInputForm addItemInTodoList={addItemInTodoList} isNewItem={false} currentItemData={currentItemData} /> : <></>
        }
    </div>
  )
}
