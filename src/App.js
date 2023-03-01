import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar  from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  LandPage  from './LandPage';
import AddTaskForm from './Todo/AddTask';
import ToDo from './Todo/Todo';
import TodoList from './Todo/TodoList';
import UpdateForm from './Todo/Update';
import { Form } from './Forms/form';
import Profile  from './Profile';
import  { Validate } from './Forms/validate';


function App() {
  return (
    <div className=" My Todo-and- Forms">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<LandPage />} />
          <Route exact path='Todo' element={< ToDo/>} />
          <Route path='TodoList' element={<TodoList />} />
          <Route path='AddTask' element={<AddTaskForm />} />
          <Route path='Update' element={< UpdateForm/>} />
          <Route path='Validate' element={<Validate />} /> 
          <Route path='Profile' element={<Profile />} />
          <Route path='form' element={<Form />} />


        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;