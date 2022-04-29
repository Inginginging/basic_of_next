import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  //앱의 함수 컴포넌트에서 Router 객체 내부에 접근할 수 있게 해주는 hook
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
