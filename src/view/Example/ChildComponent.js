import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component{
    state = {
        showDeparment: false
    }

    handleShowHide = () => {
        this.setState({
            showDeparment: !this.state.showDeparment
        })
    }

    handleOnClickDelete = (department) => {
        this.props.deleteDepartment(department)
    }

    ////////////////////////////// Cách 1 /////////////////////////////////////
    // render() {
    //     let {arrDepartment } = this.props;
    //     let { showDeparment } = this.state;
    
    //     return (
    //         <>
    //             {showDeparment === false && 
    //                 <button onClick={() => this.handleShowHide()}>Show</button>
    //             }
    //             {showDeparment === true &&
    //                 <>
    //                     <div className="lists">
    //                         {
    //                             arrDepartment.map((item, index) => {
    //                                 if (item.salary >= 200) {
    //                                     return (
    //                                         <div key={item.id}>
    //                                             {item.department} -- {item.salary}$
    //                                         </div>
    //                                     )
    //                                 }
                                
    //                             })
    //                         }
                            
    //                     </div>
    //                     <button onClick={() => this.handleShowHide()}>Hide</button>
    //                 </>
    //             }     
    //         </>
    //     )
    // }


    ////////////////////////////// Cách 2 /////////////////////////////////////
    render() {
        let {arrDepartment } = this.props;
        let { showDeparment } = this.state;
        let check = showDeparment === true ? 'showDeparment = true' : 'showDeparment = false' 
        
        return (
            <>
                {showDeparment === false ? 
                    <button className="btn-show" onClick={() => this.handleShowHide()}>Show</button>
                :
                <>
                    <div className="lists">
                        {
                            arrDepartment.map((item, index) => {
                                // if (item.salary >= 200) {
                                    return (
                                        <div key={item.id}>
                                            {item.department} -- {item.salary}$
                                            <button onClick={() => this.handleOnClickDelete(item)}>x</button>
                                        </div>
                                    )
                                // }
                                
                            })
                        }
                            
                    </div>
                    <button onClick={() => this.handleShowHide()}>Hide</button>
                </>
                }                   
            </>          
        )
    }
}

export default ChildComponent;