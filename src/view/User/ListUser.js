import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from 'react-router-dom';

class ListUser extends React.Component{
    state = {
        listUser: []
    }

    ////////////////// Cách 1 ///////////////////
    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=1')
    //         .then(res => {                           /// then. : chạy dòng trên xong mới chạy then
    //         console.log(res.data.data);
    //     })
    // }

    ///////////////// Cách 2 //////// tránh việc bất đồng bộ //////////////////
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUser } = this.state
        return (
            <div className="list-user-container">
                <div className="list-user-title">
                    Get all User
                </div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 && 
                        listUser.map((item, index) => {
                            return (
                                <div
                                    className="list-user-content-child"
                                    key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>

            
            </div>
        )   
    }
}

export default withRouter(ListUser);