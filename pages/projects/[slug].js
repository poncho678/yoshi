import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
export default function project() {
  const router = useRouter();
  const { slug } = router.query;

  const [projectData, setProjectData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // load Single Project Data

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1>Single Project</h1>
      <h1>{slug}</h1>
      <Link href="/">Home</Link>
    </>
  );
}
