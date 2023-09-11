import { PencilIcon, TrashIcon } from "../Icons";
import styles from "./TodoItems.module.css";
import { TodoItemsPropType } from "./TodoItems.types";

function TodoItems({
  displayItems,
  editItem,
  deleteItemHandler,
  toggleItemMarkedCompletedHandler,
}: TodoItemsPropType) {
  return (
    <div>
      {displayItems.map(({ title, id, isCompleted }) => {
        return (
          <div key={id} className={styles["todo-item-container"]}>
            <input
              type="checkbox"
              name=""
              id=""
              className="pointer-hover"
              checked={isCompleted}
              onChange={() => toggleItemMarkedCompletedHandler(id)}
            />
            <div
              className={`${styles["todo-item-title"]} ${
                isCompleted ? styles["line-through"] : ""
              }`}
            >
              {title}
            </div>
            <div className={styles["todo-item-action-icon-container"]}>
              <span
                onClick={() => editItem(id, title)}
                className={`${styles["todo-item-action-icon"]} ${styles["pencil-icon"]} pointer-hover`}
              >
                <PencilIcon />
              </span>
              <span
                onClick={() => deleteItemHandler(id)}
                className={`${styles["todo-item-action-icon"]} ${styles["trash-icon"]} pointer-hover`}
              >
                <TrashIcon />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoItems;
