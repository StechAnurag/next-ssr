import Link from "next/link";
import Image from "../components/Image";

const About = () => (
  <div>
    <h1>About</h1>
    <p>lorem ipsum dolor sit amet.</p>
    <Link href="/">
      <button>Home</button>
    </Link>
    <p></p>
    <Image />
  </div>
);

export default About;
