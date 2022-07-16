import React from "react";

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title:"",
            summary:"",
            form:[],
            errors:{
                title: "",
                summary: ""
            }}
    }

    onchangeForm = (e) =>{
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            title:"",
            summary:"",
            form: this.state.form.concat({ title: this.state.title, summary: this.state.summary})
        })

        const {title,summary} = this.state;
        console.log(title,summary)
        const errors = {};

        if (title === ""){
            errors.title = "Vui lòng nhập Title"
        }
        if (summary === ""){
            errors.summary = "Vui lòng nhập Summary"
        }

        this.setState({errors:errors})

    }

    render() {
        return (
            <div className="container" style={{textAlign:"center"}}>
                <h1>My Tasks</h1>
                <ul style={{listStyleType:"none"}}>
                    {this.state.form.map(({title, summary}) => (<div style={{border:"solid 1px", width:"500px" , marginLeft:"300px",marginBottom:"10px"}}><li><div>Title: {title}</div><div>Summary: {summary}</div></li></div>))}
                </ul>
                <>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                        New Task
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel" style={{width:480}}>New Task</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={this.handleSubmit} style={{textAlign:"left"}}>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="col-form-label">Title</label>
                                            <input type="text" className="form-control" id="recipient-name" name="title" value={this.state.title} onChange={this.onchangeForm}/>
                                            <br/>
                                            {
                                                this.state.errors.title ? <span style={{color: 'red'}}>{this.state.errors.title}</span>: false
                                            }
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Summary</label>
                                            <textarea className="form-control" id="message-text"  name="summary" value={this.state.summary} onChange={this.onchangeForm}/>
                                            <br/>
                                            {
                                                this.state.errors.summary ? <span style={{color: 'red'}}>{this.state.errors.summary}</span> : false
                                            }
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit} data-dismiss="modal" aria-label="Close">Create Task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </div>
        )
    }
}

export default Todolist