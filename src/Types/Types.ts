type currentItemDataType = {
    id: string, title: string
}

type todoItemType = {title: string, id: string, isCompleted: boolean}

type todoDataSaveHandlerFuncType = (data: todoItemType[]) => void

type addItemInTodoListParamType = {
    isNewItem: boolean, title: string, existingUniqueId: string | null, todoData: todoItemType[], todoDataSaveHandler: todoDataSaveHandlerFuncType, setIsAddingItem: (value: boolean)=>void, setIsEditingItem: (value: boolean)=>void
}

type addItemInTodoListHandlerParamType = {
    isNewItem: boolean, title: string, existingUniqueId: string | null
}

type addItemInTodoListFuncType = ({isNewItem, title, existingUniqueId, todoData, todoDataSaveHandler, setIsAddingItem, setIsEditingItem}:addItemInTodoListParamType) => void
type addItemInTodoListHandlerFuncType = ({isNewItem, title, existingUniqueId}:addItemInTodoListHandlerParamType) => void

type editItemFuncType = (id:string, currentTitle: string)=>void

type deleteItemHandlerFuncType = (id: string)=>void

type toggleItemMarkedCompletedHandlerFuncType = (id:string)=>void;

export type {currentItemDataType, addItemInTodoListParamType, addItemInTodoListFuncType, todoItemType, editItemFuncType, deleteItemHandlerFuncType, toggleItemMarkedCompletedHandlerFuncType, todoDataSaveHandlerFuncType, addItemInTodoListHandlerFuncType}