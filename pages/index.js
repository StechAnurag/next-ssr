import Link from "next/link";

const Index = () => (
  <div style={{ fontSize: "20px", color: "red" }}>
    <h1>Hello From Next</h1>
    <Link href="/about">
      <button>About</button>
    </Link>
    <p></p>
    <Link href="/robots">
      <button>Robots</button>
    </Link>
    {/* <a href="/about"></a> */}
  </div>
);

export default Index;
