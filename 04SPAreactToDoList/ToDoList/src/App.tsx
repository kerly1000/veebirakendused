import { useState } from 'react'
import './App.css'
import ToDoItem from 

type ToDo = {
  id: number,
  text: string,
  completed: boolean;
}
//react.FC on funktsioon., mis tagastab react komponendu. tüübi määratlus, mis võimaldan defineerida
//funktsionaalset komponenti reacti
const App: React.FC = () = => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [newToDo, setNewToDo] = useState('');
  //mis on useState?
  //see tagastab massiivi, kus esimene element on praegune olek ja teine element on 
  //funktsioon, mida saab kasutada oleku värskendamiseks.

const addToDo = () => {
  if (!newToDo.trim()) return; //ignoreeri tühje taskse
  setToDos([...toDos, { id: Date.now(), text: newToDo.trim(), completed: false }]);
  //Date.now() annab meile unikaalse ID, mis põhineb praegusest ajast.
  //..toDos tähendab, et võtame olemasolevad ülesanded ja lisame uue ülesande massiivi lõppu
  //newToDo.trim() eemaldab tühikud teksti algusest ja lõpust, et vältida tõhjage ülesannete 
  //lisamist
  //completed false tähendab, et uus ülesanne on vaikimisi lõpetamata
  setNewToDo('')};
  //pärast uue ülesande lisamist tühjendame sisendvälja, et kasutaja saaks uue ül. lisada
  const toggleToDo = (id: number) => {
    //toggleToDo funktsioon võtab ülesande ID ja miidab selle completed oleku vastupidiseks.
    //toDos.map() läbib kõik ülesanded ja kui leidus ül vastab id-le, siis luuakse
    //uus objekt, kus completed väärtus on mittetehtud
    setToDos(toDos.map(toDos =>
      toDos.id === id ? { ...toDos, completed: !toDos.completed } : toDos));
  };

  const deleteToDo = (id: number) => {
    //deleteToDo funkts. võtab ülesande is ja eemaldab selle toDos massiivist
    //toDos.filter() loob uue massiivi, mis sisaldab ainult mneid ülesandeid, mille 
    //ID ei ole kustatud
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };
};

//function App() {
  
  
  return ( 
    <div className="app">
      <h1>To-Do List</h1>
      {}
      <div className="input-row">
        <input 
          type="text"
          value={newToDo}
          onChange={e => setNewToDo(e.target.value) }
          placeholder='Add new task'
          onKeyDown={e => e.key === 'Enter' && addToDo()}
        />
        <button onClick={addToDo}>Add</button>
      </div>
      <ul className="todo-list">
        {toDos.map(toDo => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            toggleToDo={toggleToDo}
            deletetoDo={deleteToDo}
            /> 
        ))};
      </ul>
    </div>
  );
}

export default App
