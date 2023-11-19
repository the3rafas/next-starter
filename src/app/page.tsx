import HomeNavBar from "@/component/home-navbar";
import SearchInput from "@/component/search-input";
import Loading from "@/component/ui/loading";
import Image from "next/image";
import { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import ProjectsComponent from "./component/projects";
export default function Home() {
  return (
    <>
      <HomeNavBar />
      <section className="container m-auto mt-9">
        <h1 className="text-2xl font-bold text-gray-700 py-5">Overview</h1>
        <SearchInput />
      </section>

      <section className="container m-auto mt-9">
        <Suspense fallback={<Loading />}>
          <ProjectsComponent />
        </Suspense>
      </section>
    </>
  );
}
