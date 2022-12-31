import Link from "next/link";
import { useRouter } from "next/router";
export default function project() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <h1>{slug}</h1>
      <Link href="/">Home</Link>
    </>
  );
}
