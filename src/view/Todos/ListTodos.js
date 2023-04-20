import React from "react";
import './todos.scss';
import AddTodos from "./addTodos";
import { toast } from 'react-toastify';

class ListTodos extends React.Component{

    state = {
        listTodos: [
            { id: 'TD1', content: 'Messi' },
            { id: 'TD2', content: 'Ronadol' },
            { id: 'TD3', content: 'Neymar' } 
        ],

        editTodo:{}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Add Success")
    }

    handleDelete = (todo) => {
        let currenTodos = this.state.listTodos;
        currenTodos = currenTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos : currenTodos
        })
        toast.success("Delete Success")
    }

    handleEdit = (todo) => {
        let { listTodos, editTodo } = this.state; 
        let isEmptyObj = Object.keys(editTodo).length === 0  // check editTodo có rỗng
        
        if (isEmptyObj === false && editTodo.id === todo.id) {     //// khi vào trường hợp có input và nút save và điều kiện id bằng nhau để chỉ áp dụng cho itemtodo đó
            let listTodosCopy = [...listTodos]; // copy lại listTodos để xử lý
           
            //Tìm chỉ mục của đối tượng cụ thể bằng phương thức findIndex.
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            //Cập nhật thuộc tính tên của đối tượng vị trí index đó
            listTodosCopy[objIndex].content = editTodo.content      // set listTodosCopy tại vị trí lấy được == editTodo(là phần nhập mới)

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}  /// editTodo == rỗng => isEmptyObj === true => về span và nút sửa
            })
            toast.success("Update Success !!")
            return;
        }

        this.setState({
            editTodo : todo
        })
        
    }

    handleOnChangeEdit = (event) => {
        let editTodocopy = { ...this.state.editTodo };
        editTodocopy.content = event.target.value
        this.setState({
            editTodo : editTodocopy
        })

    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0  // check editTodo có rỗng
        return (
            <div className="list-todo-container">
                <AddTodos
                    addNewTodo = {this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?   // nếu editTodo rỗng thì 
                                        <span>{index + 1} - {item.content}</span>
                                        : // nếu editTodo tồn tại ///// đã được add nhờ onClickEdit thì:
                                        <>
                                            {editTodo.id === item.id ?  // chỉ hiện item chọn
                                                <span>
                                                    {index + 1} -
                                                    <input
                                                        value={editTodo.content}
                                                        onChange={(event) => this.handleOnChangeEdit(event)}  // onChange để edit và lấy dữ liệu đó gán
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.content}</span> // hiện nhưng item còn lại
                                            }
                                        </>
                                    }
                                    <button
                                        className="edit"
                                        onClick={() => this.handleEdit(item)} // add item editTodo
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}   {/*nếu editTodo có phần tử thì với id item đó sẽ là Save ngược lại là Edit*/}
                                    </button>  
                                    <button
                                        className="delete"
                                        onClick={() => this.handleDelete(item)}
                                    >Delete</button>
                                </div>
                            )
                        }) 
                    }
                    
                </div>
            </div>
        )
    }

}

export default ListTodos;