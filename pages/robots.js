import axios from "axios";
import Link from "next/link";

const Robots = (props) => (
  <div>
    <h1>Robots</h1>
    <Link href="/">
      <button>Home</button>
    </Link>
    <p></p>
    <div>
      {props.robots.map((robot) => (
        <li key={robot.id}>{robot.name}</li>
      ))}
    </div>
  </div>
);

Robots.getInitialProps = async function () {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return { robots: data };
};

export default Robots;
