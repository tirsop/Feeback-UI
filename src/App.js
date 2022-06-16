import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
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