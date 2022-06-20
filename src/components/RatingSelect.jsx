import { useState, useContext, useEffect } from 'react';
import FeedbackContext from "../context/FeedbackContext";


function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit])

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value) // the + changes the value from string to number
    select(+e.currentTarget.value)
  };

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1} // if selected is equal to 1, checked is true
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label> {/* labels in react do not have for but htmlFor */}
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect