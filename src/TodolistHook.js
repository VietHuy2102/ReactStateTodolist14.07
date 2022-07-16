import React from "react";

function TodolistHook() {
    const [title, setTitle] = React.useState("")
    const [summary, setSummary] = React.useState("")
    const [form, setForm]=React.useState([])
    const [error, setError] = React.useState({})


   const onCommentTitle = (e) =>{
        setTitle(e.target.value)
    }
    const onCommentSummary =(e)=>{
        setSummary(e.target.value)
    }

    const onSubmmit =()=> {
        setTitle("")
        setSummary("")
        setForm(form.concat(title,summary))


        if (title === ""){
            error.title = "Vui lòng nhập Title"
        }
        if (summary === ""){
            error.summary = "Vui lòng nhập Summary"
        }

        setError({
            error:error
        })

    }

          return (
              <>
                  <h1>My Tasks</h1>
                  <ul>
                      {
                          form.map(e=><li>{e}</li>)
                      }
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
                                              <input type="text" className="form-control" id="recipient-name" onChange={onCommentTitle}/>
                                              <br/>
                                              {
                                                  error.title ? <span style={{color: 'red'}}>{error.title}</span>: false
                                              }
                                          </div>
                                          <div className="form-group">
                                              <label htmlFor="message-text" className="col-form-label">Summary</label>
                                              <textarea className="form-control" id="message-text" defaultValue={""} onChange={onCommentSummary}/>
                                              <br/>
                                              {
                                                  error.summary ? <span style={{color: 'red'}}>{error.summary}</span>: false
                                              }
                                          </div>
                                      </form>
                                  </div>
                                  <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancle</button>
                                      <button type="button" className="btn btn-primary " data-dismiss="modal" aria-label="Close" onClick={onSubmmit} >Create Task</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </>

              </>
          )
}

export default TodolistHook;
