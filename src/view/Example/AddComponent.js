import React from "react";

class AddComponent extends React.Component {

    state = {
        department : '',
        salary: ''
    }

    handleChangeDeparment = (event) => {
        this.setState({
            department: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();  // submit ko tải lại trang
        if (!this.state.department || !this.state.salary) {
            alert("Điền đầy đủ thông tin");
            return;
        }

        this.props.addNewDepartment({
            id: Math.floor(Math.random() * 11),
            department: this.state.department,
            salary: this.state.salary
        })

        this.setState({
            department : '',
            salary: ''
        })
    }


    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Department:</label>
                    <br/>
                    <input
                        type="text"
                        value={this.state.department}
                        onChange={(event) => this.handleChangeDeparment(event)}>
                    </input>
                    <br/>
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="number"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}>
                    </input>
                    <br /><br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}>    
                    </input>
                </form> 
            </>
        )
    }
}

export default AddComponent;