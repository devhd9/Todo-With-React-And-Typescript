import { addItemInTodoListFuncType, todoItemType } from "../Types/Types";
import uuid from 'uuidv4';

const addItemInTodoList:addItemInTodoListFuncType = ({isNewItem, title, existingUniqueId, todoData, todoDataSaveHandler, setIsAddingItem, setIsEditingItem}) => {
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

function removeItemFromTodoData(uniqueId:string, todoData: todoItemType[]): todoItemType[] {
    return todoData.filter(({id})=> id !== uniqueId)
}

function toggleItemMarkedCompleted(uniqueId: string, todoData: todoItemType[]): todoItemType[] {
    return todoData.map((obj)=>{
                if (obj.id === uniqueId) obj.isCompleted = !obj.isCompleted;
                return obj;
    })
}

export default function getTodoItemsToDisplay(showDoneSection: boolean, todoData: todoItemType[]) {
    return showDoneSection ? todoData.filter(({isCompleted})=> isCompleted) : todoData.filter(({isCompleted})=> !isCompleted);
}

export {addItemInTodoList, removeItemFromTodoData, toggleItemMarkedCompleted, getTodoItemsToDisplay}