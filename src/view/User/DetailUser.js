import React from "react";
import { withRouter } from "react-router";
import axios from "axios";

class DetailUser extends React.Component{
    state = {
        user: {}
    }
    
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
       
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    handelBackLishUser = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0  // check editTodo có rỗng
        console.log(this.props);
        return (
            <>
                {isEmptyObj === false &&
                    <>
                    <br></br>
                    <img src={user.avatar} /> 
                    <div>
                    Name : {user.first_name} {user.last_name}
                    </div>
                    <div>
                    Email : {user.email} 
                    </div>
                    <br></br>
                    <button type="button" onClick={() => this.handelBackLishUser()}>Back</button>
                    </>
                }
            </>
            
        )
    }
}

export default withRouter(DetailUser);