import { Link } from "react-router-dom";

const AboutPage = () => (
  <div className="page-body">
    <h1>About ThankFul Journal</h1>
    <p>
      Thankful Journal is dedicated to the users by allowing them to express
      their positivity and improve their mood. Users are encouraged to continue
      to write about what makes them happy with guided prompts. Users that
      struggle to find inspirations are encouraged to visit the
      <Link to="/mood-booster">Mood Booster Page</Link>to check out some of the
      positive motivators that others have used.
    </p>
  </div>
);

export default AboutPage;
