import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
// import FeedbackData from './data/FeedbackData';

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
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