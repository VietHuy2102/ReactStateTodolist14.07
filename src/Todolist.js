import React from "react";

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title:"",summary:"",form:[]}
    }

    onchangeTitle = (e) =>{
        this.setState({
            title: e.target.value,
            summary: e.target.value,

        })


    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.state = "";
        this.summary = ""
        this.setState(this.state.form.concat(this.state.title,this.state.summary))


    }

    render() {

        return (
            <>
                <h1>My Tasks</h1>
                <ul>
                    {this.state.form.map((e)=><li>{e}</li>)}
                </ul>
                <>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                       New Task
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">New Task</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="col-form-label">Title</label>
                                            <input type="text" className="form-control" id="recipient-name" onChange={this.onchangeTitle}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Summary</label>
                                            <textarea className="form-control" id="message-text" defaultValue={""} onChange={this.onchangeTitle}/>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancle</button>
                                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Create Task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </>
        )
    }
}

export default Todolist
