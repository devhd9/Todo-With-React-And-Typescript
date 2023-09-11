import { todoItemType } from "../Types/Types";

export function setTodoDataInLocalStorage(todoData: todoItemType[]): void {
    localStorage.setItem('todoData', JSON.stringify(todoData));
}

export function getTodoDataFromLocalStorage(): todoItemType[] | null {
    let data = localStorage.getItem('todoData')
    if (typeof data === 'string') {
        return JSON.parse(data)
    }
    return data;
}