type currentItemDataType = {
    id: string, title: string
}

type addItemInTodoListParamType = {
    isNewItem: boolean, title: string, existingUniqueId: string | null
}

type todoItemType = {title: string, id: string, isCompleted: boolean}

type addItemInTodoListFuncType = ({isNewItem, title, existingUniqueId}:addItemInTodoListParamType) => void

type editItemFuncType = (id:string, currentTitle: string)=>void

type deleteItemHandlerFuncType = (id: string)=>void

type toggleItemMarkedCompletedFuncType = (id:string)=>void;

export type {currentItemDataType, addItemInTodoListParamType, addItemInTodoListFuncType, todoItemType, editItemFuncType, deleteItemHandlerFuncType, toggleItemMarkedCompletedFuncType}