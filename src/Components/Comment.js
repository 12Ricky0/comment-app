import React, { useState } from "react";
import { Vote } from "./Image";

function Overlay() {
    return <div className="overlay"></div>
}

export function User(props) {

    const [modalOpen, setModalOpen] = useState(false);
    const [textEdit, setTextEdit] = useState(false);
    const [updateValue, setUpdateValue] = useState("");
    const textarea = document.getElementById('textarea');
    const button = document.getElementById('button');
    button.disabled = textarea.value.trim() === ''

    function handleClick() {
        props.onDelete(props.id);
        handleModal();
    }

    function handleModal() {
        setModalOpen(!modalOpen);
        document.body.classList.toggle('modal-open');
    }

    function handleEdit() {
        setTextEdit(!textEdit);
        setUpdateValue(props.userComment)
    }

    function onEdit(event) {

        setUpdateValue(() => {
            props.onChange(event)

        })

    }

    function handleEditedText() {
        props.onEdited(props.id, props.formid);
        handleEdit();
    }


    return (
        <div className="vl">
            <div className='comment-section for-comment'>

                <Vote />
                <header>

                    <span onClick={handleEdit} className='edit-span'><img src="images/icon-edit.svg" alt="Logo" /> Edit</span>
                    <span onClick={handleModal} className='delete-span'><img src="images/icon-delete.svg" alt="Logo" /> Delete</span>
                    <img className='dp' src="images/avatars/image-juliusomo.png" alt='.' />
                    <h3 className='name'>juliusomo</h3>  <span className='you'>you</span>
                    <h3 className='time'>{props.time} </h3>
                </header>


                {textEdit ?
                    <div className="edit-form" formid={props.formid} >
                        <textarea className="textarea" name="userComment" onChange={onEdit} rows="4" cols="60" placeholder="Add a Comment..." value={updateValue} />
                        <button onMouseDown={handleEditedText} className="send-btn update-btn" type="submit">UPDATE</button>
                    </div>
                    : <div>
                        <span className='user'>@ramsesmiron</span>

                        <p className="comment-text">{props.userComment}</p>

                    </div>

                }
            </div>

            {modalOpen &&
                <div>
                    <Overlay />
                    <section className="delete-modal">
                        <h3>Delete Comment</h3>
                        <p>Are your sure you want to delete this comment? This will remove the comment and can`t be undone.</p>
                        <button onClick={() => { handleModal() }} className="no-btn">NO, CANCEL</button>
                        <button onClick={handleClick} className="yes-btn">YES, DELETE</button>
                    </section>
                </div>
            }


        </div>
    )
}

function Comment(props) {


    return (
        <div>
            <form onSubmit={props.onSubmit} className="myForm" formid={props.formid}>
                <img className="comment-img" src="images/avatars/image-juliusomo.png" alt=".." />
                <textarea type="text" name="userComment" id="textarea" onChange={props.onChange} rows="4" cols="60" placeholder="Add a Comment..." value={props.value} />

                <button onClick={props.onClick} value={props.value} id="button" className="send-btn" type="submit">{props.name}</button>

            </form>
        </div>
    )
}

export default Comment;