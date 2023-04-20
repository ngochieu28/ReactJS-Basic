import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component{

    state = {
        name: 'Hieu',
        nickName: "Zeno"
    }

    handleClickButton = () => {
        alert("Click")
    }

    handleChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {


        return (
            <>
                <div className="top1">
                    Hello Component, My name is {this.state.name}
                </div>
                <div className="top2">
                    My nickname is {this.state.nickName}
                </div>
                <div className="top3">
                    <button onClick={() => {this.handleClickButton()}}>Click</button>
                </div>
                <div className="top4">
                    <input type="text" value={this.state.name} onChange={(event) => this.handleChangeInput(event)}></input>
                </div>

                <ChildComponent name={'one'} />
                <ChildComponent name={'two'} />
                <ChildComponent name={'three'}/>
            </>

            
            
        )
    }
}

export default MyComponent;