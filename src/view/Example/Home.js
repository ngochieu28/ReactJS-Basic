import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component{

    componentDidMount() {
        setTimeout(() => {
            console.log("độ trễ khi xuất trong code này ra là 3000mms ");
            // sử dụng props.history nhờ withRouter
            // this.props.history.push('/todos')             /// => điều hướng

        }, 3000)
    }

    render() {
        return (
            <div> Hello World</div>
        )
    }
}

export default withRouter(Home);