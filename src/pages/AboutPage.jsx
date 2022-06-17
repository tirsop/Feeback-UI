import Card from "../components/shared/Card";
import { Link } from 'react-router-dom';


function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p className="">This is a React app to leave feedback for a product or service</p>
        <Link to="/">Back to home page</Link>
      </div>
    </Card>
  )
}

export default AboutPage