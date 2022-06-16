import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  )
}

export default App









// const title = "Blog post";
// const body = "this is my body bro";
// const comments = [
//   { id: 1, text: "Comment one" },
//   { id: 2, text: "Comment two" },
//   { id: 3, text: "Comment three" }
// ]

// const loading = false;
// if (loading) return <h1>Loading...</h1>
// const showComments = true;
// const commentBlock = (
//   <div className="comments">
//     <h3>Comments ({comments.length}) </h3>
//     <ul>
//       {comments.map((comment, index) => (
//         <li key={index} >{comment.text} </li>
//       ))}
//     </ul>
//   </div>
// );

// return (
//   <div className="container">
//     <h1>{title.toUpperCase()}</h1>
//     <p className="">{body}</p>
//     {showComments && commentBlock}
//   </div>
// )