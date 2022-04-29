//next에서 제공하는 head tag 역할을 하는 Component
import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movie</title>
    </Head>
  );
}
