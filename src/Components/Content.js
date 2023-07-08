import React, { useState } from 'react';
import Comment from './Comment';


export function CommentContent(props) {
    const [showForm, setShowForm] = useState(false);

    function handleClick() {
        setShowForm(!showForm);
    }

    function onSubmit(event) {
        props.formSubmit(props.formid, event);
    }

    function onAdd() {
        setTimeout(() => {
            handleClick();
        }, 1000);

    }


    return (
        <div >
            <div className='vl'>
                <div className='comment-section section-2'>

                    <div className="vote-btn">
                        <img className="increase" src="images/icon-plus.svg" alt="." />
                        <p className="vote-numb">{props.scores}</p>
                        <img className="decrease" src="images/icon-minus.svg" alt="." />

                    </div>


                    <header className='header'>
                        <span className='reply-btn' onClick={handleClick}><img src="images/icon-reply.svg" alt="Logo" /> Reply</span>

                        <img className='dp' src={props.src} alt='.' />
                        <h3 className='name'>ramsesmiron</h3>
                        <h3 className='time'>1 week ago</h3>
                    </header>
                    <span className='user'>@maxblagun</span>
                    <p> {props.comment}</p>

                </div>
            </div>
            {showForm && (<Comment
                name="REPLY"
                formid={props.formid}
                onClick={onAdd}

                value={props.value}
                onChange={props.onChange}
                onSubmit={onSubmit}
            />)}
        </div>
    )
}


function Content(props) {

    const [showForm, setShowForm] = useState(false);

    function handleClick() {
        setShowForm(!showForm);
    }

    function onAdd() {
        setTimeout(() => {
            handleClick();
        }, 1000);

    }

    function onSubmit(event) {
        props.formSubmit(props.formid, event)
    }



    return (
        <div>
            <div className='size'>
                <div className="vote-btn">
                    <img className="increase" src="images/icon-plus.svg" alt="." />
                    <p className="vote-numb">{props.scores}</p>
                    <img className="decrease" src="images/icon-minus.svg" alt="." />

                </div>

                <header>
                    <span className='reply-btn' onClick={handleClick} ><img src="images/icon-reply.svg" alt="Logo" /> Reply</span>

                    <img className='dp' src={props.src} alt='.' />
                    <h3 className='name'>{props.name}</h3>
                    <h3 className='time'>{props.time}</h3>
                </header>
                <p>{props.comment}</p>
                <p>{props.userComment}</p>
            </div>
            {showForm && (<Comment
                name="REPLY"
                formid={props.formid}
                onClick={onAdd}
                onChange={props.onChange}
                onSubmit={onSubmit}
            />)}

        </div>

    )

}

export default Content;