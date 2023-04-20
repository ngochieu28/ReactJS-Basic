import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class ComponentForm extends React.Component{

    state = {
        arrDepartment : [
            {
                id: 'A01',
                department: 'Marketing',
                salary: '100'
            },
            {
                id: 'A02',
                department: 'Test',
                salary: '200'
            },
            {
                id: 'A03',
                department: 'Dev',
                salary: '300'
            }
        ]
    }

    //////////////////////// Cách 1 /////////////////////////
    // addNewDepartment = (department) => {
    //     let currenDepartment = this.state.arrDepartment;
    //     currenDepartment.push(department)
    //     this.setState({
    //         arrDepartment: currenDepartment
    //     })
    // }

    //////////////////////// Cách 2 /////////////////////////
    addNewDepartment = (derparment) => {
        this.setState({
            arrDepartment: [...this.state.arrDepartment, derparment]  /// "...": copy arr được gọi và "," thêm để thêm 1 phần tử mới sau đó ////
        })
        console.log(derparment);
    }

    deleteDepartment = (department) => {
        let currenDepartment = this.state.arrDepartment;
        currenDepartment = currenDepartment.filter(item => item.id !== department.id)
        this.setState({
            arrDepartment : currenDepartment
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(">> run componentDidUpdate: ", "prevState: ", prevState, "curren state: ", this.state);
        // so sánh State Component trước và sau update
        // chỉ chạy khi sửa đổi update State
    }

    componentDidMount() {
        console.log(">> run componentDidMount !!");
        // chạy sau render
        // thích hợp để gọi API
    }


    render() {
        console.log(">> run render !!");
        return (
            <>
                <AddComponent
                    addNewDepartment = {this.addNewDepartment}
                />
                
                <ChildComponent
                    arrDepartment={this.state.arrDepartment}
                    deleteDepartment = {this.deleteDepartment}
                />

            </>
            
        )
    }
}

export default ComponentForm;