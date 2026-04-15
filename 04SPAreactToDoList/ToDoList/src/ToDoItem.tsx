

type ToDo {
    id: number;
    text: string;
    completed: boolean;
}

type Props = {
    toDo: ToDo;
    toggleToDo: (id: number) => void;
    delete ToDo: (id: number) => void;
};
//ToDoItem on komponent, mis esindab ühte ülesannet meie to-do listis.
//react.FC<Props> tähendab, et ToDoItem on funktsionaalne komponent. mis võtab Props tüüüpi propsid
//propsid on objektid, mis sisaldavad andmeid ja funktsioone, mida komponent saab kasutada
const toDoItem: React.FC<Props> = ({ toDo, toggleToDo, deleteToDo}) => {
    return (
        <li className={'todo-item ${toDo.completed ? 'completed' : ''}'}>
            <span onClick={() => toggleToDo(toDoItem.id)}>{toDoItem.text}</span>
            <button onClick={() => deleteToDo(toDoItem.id)}>Delete</button>
        </li>
    );
};