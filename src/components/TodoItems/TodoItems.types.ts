import {
  deleteItemHandlerFuncType,
  editItemFuncType,
  todoItemType,
  toggleItemMarkedCompletedHandlerFuncType,
} from "../../Types/Types";

type TodoItemsPropType = {
  displayItems: todoItemType[];
  editItem: editItemFuncType;
  deleteItemHandler: deleteItemHandlerFuncType;
  toggleItemMarkedCompletedHandler: toggleItemMarkedCompletedHandlerFuncType;
};

export type { TodoItemsPropType };
