import React, { useState, useEffect } from "react";
import Axios from "axios";
import Content, { CommentContent } from "./Components/Content";
import Comment, { User } from "./Components/Comment";
import { Theme } from "./Components/Image";


function App() {

  Axios.defaults.withCredentials = true;

  const [userReply, setUserReply] = useState({
    userComment: ""
  });

  const [data, setData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [thirdData, setThirdData] = useState([]);
  const [input, setInput] = useState([]);
  const [secondInput, setSecondInput] = useState([]);
  const [thirdInput, setthirdInput] = useState([]);


  function handleChange(event) {
    const { name, value } = event.target;

    setUserReply((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })

  };

  function handleEditChange(event) {
    const { name, value } = event.target;

    setUserReply((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })

  }


  function handleSubmit(formid, event) {
    const userData = {
      content: userReply.userComment
    }

    event.preventDefault();



    if (formid === secondData._id) {
      Axios.post(`${process.env.REACT_APP_API_KEY}/articles/${secondData._id}`, userData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }

      })
    }

    else if (formid === data._id) {
      Axios.post(`${process.env.REACT_APP_API_KEY}/articles/${data._id}`, userData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }

      })

    }
    else if (formid === thirdData._id) {
      Axios.post(`${process.env.REACT_APP_API_KEY}/articles/${thirdData._id}`, userData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }

      })

    }
  }

  function handleSecondSubmit(e) {
    const textarea = document.getElementById('textarea');
    const userData = {
      content: userReply.userComment
    }

    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_API_KEY}/articles/${thirdData._id}`, userData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    textarea.value = "";
  }

  async function handleDelete(id) {

    await Axios.delete(`${process.env.REACT_APP_API_KEY}/articles/${data._id}/comment/${id}`)
    const newData = input.filter((el) => el._id !== id);
    setInput(newData);

    await Axios.delete(`${process.env.REACT_APP_API_KEY}/articles/${secondData._id}/comment/${id}`)
    const newData2 = secondInput.filter((el) => el._id !== id);
    setSecondInput(newData2);

    await Axios.delete(`${process.env.REACT_APP_API_KEY}/articles/${thirdData._id}/comment/${id}`)
    const newData3 = thirdInput.filter((el) => el._id !== id);
    setthirdInput(newData3);

  }

  function editedComment(id, formid) {

    if (secondData._id === formid) {
      Axios.patch(`${process.env.REACT_APP_API_KEY}/articles/${secondData._id}/comment/${id}`, {
        content: userReply.userComment
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }

    else if (data._id === formid) {
      Axios.patch(`${process.env.REACT_APP_API_KEY}/articles/${data._id}/comment/${id}`, {
        content: userReply.userComment
      }
        , {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }

        })
    }
    else if (thirdData._id === formid) {
      Axios.patch(`${process.env.REACT_APP_API_KEY}/articles/${thirdData._id}/comment/${id}`, {
        content: userReply.userComment
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

    }
  }

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_KEY}/articles/6468f059eaa6080d903bcef9`)
      .then((response) => {
        setData(response.data);

        const fetchedPosts = response.data.comment;

        const updatedPost = fetchedPosts.map((value) => {
          const now = new Date();
          const postTime = new Date(value.createdAt);
          const timeDiff = now.getTime() - postTime.getTime();
          const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));


          if (daysDiff < 1) {
            return {
              ...value,
              daysSincePost: "Today",
            }

          }

          else if (daysDiff === 1) {
            return {
              ...value,
              daysSincePost: daysDiff + " day ago",
            }

          }
          else if (daysDiff > 1) {
            return {
              ...value,
              daysSincePost: daysDiff + " days ago",
            }

          }

          else { return false }

        })
        setInput(updatedPost);
      });
  }, [data, input]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_KEY}/articles/6457f50db459c14c636fab4e`)

      .then((response) => {
        setSecondData(response.data);

        const fetchedPosts = response.data.comment;

        const updatedPost = fetchedPosts.map((value) => {
          const now = new Date();
          const postTime = new Date(value.createdAt);
          const timeDiff = now.getTime() - postTime.getTime();
          const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

          if (daysDiff < 1) {
            return {
              ...value,
              daysSincePost: "Today",
            }

          }

          else if (daysDiff === 1) {
            return {
              ...value,
              daysSincePost: daysDiff + " day ago",
            }

          }
          else if (daysDiff > 1) {
            return {
              ...value,
              daysSincePost: daysDiff + " days ago",
            }

          }
          else { return false }

        })
        setSecondInput(updatedPost);
      });
  }, [secondData, secondInput]);


  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_KEY}/articles/6472f0c8afeebdac86c83fb2`)
      .then((response) => {
        setThirdData(response.data);

        const fetchedPosts = response.data.comment;

        const updatedPost = fetchedPosts.map((value) => {
          const now = new Date();
          const postTime = new Date(value.createdAt);
          const timeDiff = now.getTime() - postTime.getTime();
          const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

          if (daysDiff < 1) {
            return {
              ...value,
              daysSincePost: "Today",
            }

          }

          else if (daysDiff === 1) {
            return {
              ...value,
              daysSincePost: daysDiff + " day ago",
            }

          }
          else if (daysDiff > 1) {
            return {
              ...value,
              daysSincePost: daysDiff + " days ago",
            }

          }
          else { return false }

        })
        setthirdInput(updatedPost);
      });
  }, [thirdData, thirdInput]);



  return (
    <main>
      <Theme />

      <div >
        <Content
          key={data._id}
          id={data._id}
          src={data.image}
          name={data.name}
          time={data.time}
          comment={data.content}
          onChange={handleChange}
          formSubmit={handleSubmit}
          formid={data._id}
          scores={data.score}
        />


        {input.map((comment, index) => {

          return (<User
            userComment={comment.content}
            key={index}
            id={comment._id}
            onDelete={handleDelete}
            onChange={handleEditChange}
            onEdited={editedComment}
            formid={data._id}
            time={comment.daysSincePost}
          />)
        })}
      </div>
      <div>
        <Content
          key={secondData._id}
          id={secondData._id}
          src={secondData.image}
          name={secondData.name}
          time={secondData.time}
          comment={secondData.content}
          onChange={handleChange}
          formSubmit={handleSubmit}
          formid={secondData._id}
          scores={secondData.score}

        />

        {secondInput.map((comment, index) => {
          return (<User
            userComment={comment.content}
            key={index}
            id={comment._id}
            onDelete={handleDelete}
            time={comment.daysSincePost}
            onEdited={editedComment}
            onChange={handleEditChange}
            formid={secondData._id}

          />)
        })}


      </div>
      <CommentContent
        key={thirdData._id}
        id={thirdData._id}
        scores={thirdData.score}
        comment={thirdData.content}
        src={thirdData.image}
        formid={thirdData._id}
        onChange={handleChange}
        formSubmit={handleSubmit}

      />
      {thirdInput.map((comment, index) => {
        return (<User
          userComment={comment.content}
          key={index}
          id={comment._id}
          onDelete={handleDelete}
          time={comment.daysSincePost}
          onEdited={editedComment}
          onChange={handleEditChange}
          formid={thirdData._id}

        />)
      })}



      <Comment name="SEND"
        formid={thirdData._id}
        onChange={handleChange}
        onSubmit={handleSecondSubmit}

      />
    </main>
  )


};

export default App;
