import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Home Page</h1>
      <p>Go to the styled page:</p>
      <Link href="/StyledPage">Page</Link>
    </div>
  );
}
