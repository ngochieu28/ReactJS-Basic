import React from "react";
import { toast } from 'react-toastify';

class AddTodos extends React.Component{
    state = {
        content: ''
    }

    handleOnChage = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleOnClick = () => {
        if (!this.state.content) {
            toast.error("Error !! Hãy nhập content")
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 101),
            content: this.state.content
        }

        this.props.addNewTodo(todo)

        this.setState({
            content: ''
        })
    }

    render() {
        let { content } = this.state;
        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={content}
                    onChange={(event) => this.handleOnChage(event)}
                />
                <button
                    className="add"
                    onClick={() => this.handleOnClick()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodos;