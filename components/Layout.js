import Nav from "./Nav";

//Layout Component: React model을 사용하여 재사용되는 component들을 하나로. ex) nav, footer...
export default function Layout({ children }) {
  //children: _app.js 에서 쓰일 Layout Component의 자식들. 주로 pages의 Component
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
