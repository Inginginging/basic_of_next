import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";

export default function Nav() {
  //앱의 함수 컴포넌트에서 Router 객체 내부에 접근할 수 있게 해주는 hook
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a
          /*css module로 className 두개를 넣는 방법. */
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`${styles.link} ${
            router.pathname === "/about" ? styles.active : ""
          }`}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
