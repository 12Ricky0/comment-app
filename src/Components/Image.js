import React, { useState } from "react";


export default Image;

export function Vote() {

    const [upVote, setUpvote] = useState(0)

    function onIncrease() {
        setUpvote(1)
    }

    function onDecrease() {
        setUpvote(0)
    }

    return (
        <div className="vote-btn cmt-vote">
            <img className="increase" onClick={onIncrease} src="images/icon-plus.svg" alt="." />
            <p className="vote-numb">{upVote}</p>
            <img className="decrease" onClick={onDecrease} src="images/icon-minus.svg" alt="." />

        </div>
    )
}

export function Theme() {

    const [isChecked, setIsChecked] = useState(false)
    const size = document.querySelectorAll(".size");
    const comment = document.querySelectorAll(".comment-section");
    const vote = document.querySelectorAll(".vote-btn");
    const votenum = document.querySelectorAll(".vote-numb");
    const span = document.querySelectorAll(".delete-span");
    const span2 = document.querySelectorAll(".edit-span");
    const span3 = document.querySelectorAll(".reply-btn");
    const form = document.querySelectorAll("form");
    const textarea = document.querySelectorAll("textarea");
    const paragraph = document.querySelectorAll("p");
    const time = document.querySelectorAll(".time");
    const increase = document.querySelectorAll(".increase");
    const decrease = document.querySelectorAll(".decrease");

    const del = document.querySelectorAll(".delete-modal");

    if (isChecked === true) {
        document.body.style.backgroundColor = "hsl(0, 0%, 10%)";
        size.forEach(s => { s.classList.add("dark-theme") });
        comment.forEach(c => { c.classList.add("dark-theme") });
        form.forEach(f => { f.classList.add("dark-theme") });
        textarea.forEach(ta => { ta.classList.add("dark-theme") });
        vote.forEach(v => { v.classList.add("vote-dark") });
        votenum.forEach(vn => { vn.classList.add("num-dark") });
        increase.forEach(n => { n.classList.add("num-dark2") });
        decrease.forEach(d => { d.classList.add("num-dark2") });
        span.forEach(s => { s.classList.add("span-dark") });
        span2.forEach(s => { s.classList.add("span-dark") });
        span3.forEach(s => { s.classList.add("span-dark") });
        paragraph.forEach(p => { p.style.color = "hsl(0, 0%, 70%)"; });
        time.forEach(t => { t.style.color = "hsl(0, 0%, 50%)"; });
        del.forEach(d => { d.classList.add("dark-theme") });
    }

    else {
        document.body.style.backgroundColor = "hsl(223, 19%, 93%)";
        size.forEach(s => { s.classList.remove("dark-theme") });
        comment.forEach(c => { c.classList.remove("dark-theme") });
        form.forEach(f => { f.classList.remove("dark-theme") });
        textarea.forEach(ta => { ta.classList.remove("dark-theme") });
        vote.forEach(v => { v.classList.remove("vote-dark") });
        votenum.forEach(vn => { vn.classList.remove("num-dark") });
        increase.forEach(n => { n.classList.remove("num-dark2") });
        decrease.forEach(d => { d.classList.remove("num-dark2") });
        span.forEach(s => { s.classList.remove("span-dark") });
        span2.forEach(s => { s.classList.remove("span-dark") });
        span3.forEach(s => { s.classList.remove("span-dark") });
        paragraph.forEach(p => { p.style.color = "hsl(211, 10%, 45%)"; });
        time.forEach(t => { t.style.color = "hsl(211, 10%, 45%)"; });
        del.forEach(d => { d.classList.remove("dark-theme") });

    }


    return (
        <section className="theme-toggle">
            <span className="light"><img src="images/light.svg" alt="Logo" /></span>

            <label className="switch">
                <input type="checkbox" onClick={(() => { setIsChecked(!isChecked); console.log(isChecked) })} value={isChecked} />
                <span className="slider round"></span>
            </label>
            <span className="moon"><img src="images/moon.svg" alt="Logo" /></span>

        </section>
    )
}

