import Card from "../components/shared/Card";
import { Link } from 'react-router-dom';


function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p className="">Coded by <a href="https://tirsop.com" target="_blank">Tirso Pascual</a>.</p>
        <p className="">This is a React app to leave feedback for a product or service. It is build with React using hooks (useState, useContext, useEffect), it has styling components and uses the React router.</p>
        <Link to="/">Back to home page</Link>
      </div>
    </Card>
  )
}

export default AboutPage