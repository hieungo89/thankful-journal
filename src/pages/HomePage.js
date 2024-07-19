import lightbulb from "../images/lightbulb.png";
import hand from "../images/hand.png";
import shiningLight from "../images/shiningLight.png";

const HomePage = () => (
  <>
    <div className="header">
      <h1>My Thankful Journal</h1>
      <h2>The sources of all your happiness stored in one place!</h2>
    </div>
    <div className="home-container">
      <div className="text-container">
        <h2 className="heading-a">Spill Your Thoughts!</h2>
        <p>
          Welcome to My Thankful Journal - a space designed for your chaotic
          mind and immense gratitude. Here, you can let your thoughts run wild,
          record them and discover the power of positivity.
        </p>
      </div>
      <img src={lightbulb} alt="lightbulb" />
    </div>
    <div className="home-container">
      <div className="text-container">
        <h2>Journal: Record, Reflect, Repeat</h2>
        <p>
          Everyone has a story. My Thankful Journal provides you with the
          perfect canvas to paint yours, enabling an intimate process of
          self-reflection
        </p>
      </div>
      <img src={hand} alt="hand" />
    </div>
    <div className="home-container">
      <img src={shiningLight} alt="shining light" />
      <div className="text-container">
        <h2>Thankful List: Cherish the Little Joys</h2>
        <p>
          Meaningful moments make up life. List what you&#39;re thankful for and
          discover how little moments of joy add a world of happiness.
        </p>
      </div>
    </div>
    <div className="subscribe">
      <h3>Join the Gratitude Group! Sign up below</h3>
      <form>
        <input type="text" placeholder="name@email.com" />
        <button>Subscribe</button>
      </form>
    </div>
  </>
);

export default HomePage;
