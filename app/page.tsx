import Link from "next/link";
export default function Home() {
  return (
    <div>
      <header>
        <h1>The Web</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link target="_blank" href="/about">About</Link>
            </li>
            <li>
              <Link target="_blank" href="/about/location">Location</Link>
            </li>
            <li>
              <Link target="_blank" href="/contact">Contact</Link>
            </li>
            <li>
              <Link  target="_blank" href="/services">Services</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
      </div>
    </div>
  );
}
