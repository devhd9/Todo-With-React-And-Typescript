import { useState } from 'react'
import AddItem from '../AddItem';
import AppIcon from '../AppIcon';
import OverlayInputForm from '../OverlayInputForm';
import SectionSelector from '../SectionSelector';
import TodoItems from '../TodoItems';
import styles from './TodoDisplay.module.css';
import { addItemInTodoListHandlerFuncType, currentItemDataType, deleteItemHandlerFuncType, editItemFuncType, todoDataSaveHandlerFuncType, todoItemType, toggleItemMarkedCompletedHandlerFuncType } from '../../Types/Types';
import getTodoItemsToDisplay, { addItemInTodoList, removeItemFromTodoData, toggleItemMarkedCompleted } from '../../utils/todoDataCrudOperation';
import { getTodoDataFromLocalStorage, setTodoDataInLocalStorage } from '../../utils/localStorageOperation';

export default function TodoDisplay() {
    const [todoData, setTodoData] = useState<todoItemType[]>([]);
    const [isAddingItem, setIsAddingItem] = useState<boolean>(false);
    const [isEditingItem, setIsEditingItem] = useState<boolean>(false);
    const [showDoneSection, setShowDoneSection] = useState<boolean>(false);
    const [currentItemData, setCurrentItemData] = useState<currentItemDataType>({id: "", title: ""});

    const displayItems = getTodoItemsToDisplay(showDoneSection, todoData);
    
    const todoDataSaveHandler:todoDataSaveHandlerFuncType = (data: todoItemType[]) => {
        setTodoData(data);
        setTodoDataInLocalStorage(data)
    }

    const localStorageData = getTodoDataFromLocalStorage();
    if (todoData.length === 0 && localStorageData && localStorageData.length !== 0) {
        todoDataSaveHandler(localStorageData);
    }

    const addItemInTodoListHandler:addItemInTodoListHandlerFuncType = ({isNewItem, title, existingUniqueId}) => {
        addItemInTodoList({isNewItem, title, existingUniqueId, todoData, todoDataSaveHandler, setIsAddingItem, setIsEditingItem})
    }

    const editItem: editItemFuncType = (uniqueId, currentTitle) => {
        setIsEditingItem(true);
        setCurrentItemData({
            id: uniqueId,
            title: currentTitle
        })
    }

    const deleteItemHandler: deleteItemHandlerFuncType = (uniqueId) => {
        const newData = removeItemFromTodoData(uniqueId, todoData)
        todoDataSaveHandler(newData);
    }

    const toggleItemMarkedCompletedHandler: toggleItemMarkedCompletedHandlerFuncType = (id) => {
        const newData = toggleItemMarkedCompleted(id, todoData);
        todoDataSaveHandler(newData)
    }

  return (
    <div className={`${styles['todo-app-box']} ${styles['todo-app-box-width']}`}>
        <AppIcon />
        <SectionSelector showDoneSection={showDoneSection} setShowDoneSection={setShowDoneSection} />
        <TodoItems displayItems={displayItems} editItem={editItem} deleteItemHandler={deleteItemHandler} toggleItemMarkedCompletedHandler={toggleItemMarkedCompletedHandler} />
        <AddItem setIsAddingItem={setIsAddingItem} />
        {
            isAddingItem ? <OverlayInputForm addItemInTodoListHandler={addItemInTodoListHandler} isNewItem={true} /> : <></>
        }
        {
            isEditingItem ? <OverlayInputForm addItemInTodoListHandler={addItemInTodoListHandler} isNewItem={false} currentItemData={currentItemData} /> : <></>
        }
    </div>
  )
}
