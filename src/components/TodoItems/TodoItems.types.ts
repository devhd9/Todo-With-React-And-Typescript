import { deleteItemHandlerFuncType, editItemFuncType, todoItemType, toggleItemMarkedCompletedFuncType } from "../../Types/Types";

type TodoItemsPropType = {displayItems: todoItemType[], editItem:editItemFuncType, deleteItemHandler:deleteItemHandlerFuncType, toggleItemMarkedCompleted:toggleItemMarkedCompletedFuncType}

export type {TodoItemsPropType}