import NavBar from "@/components/NavBar";
import React, { useState } from "react";
// import { client } from "../../../lib/contentful/client";
// import PostCard from "@/components/PostCard";
import Footer from "@/components/Footer";
import Head from "next/head";
import PostCard from "@/components/PostCard";
// import { collection, addDoc } from "firebase/firestore";
// import { database } from "@/firebase/config";

const Blog = ({ posts }: any) => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");

  //   const handleSubmit = async (event: any) => {
  //     event.preventDefault();
  //     setStatus("loading");

  //     try {
  //       const formData = {
  //         email: email,
  //       };

  //       const emailRef = collection(database, "email");
  //       await addDoc(emailRef, formData);

  //       // Clear form after submission
  //       setEmail("");

  //       setStatus("done");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Stay up to date with the latest news and opinions from One Cloud Media"
        />
        <title>Blog | One Cloud Media</title>
      </Head>
      <main className="flex w-full flex-col">
        <div className="w-full px-[8rem] py-20 gap-2 bg-[#1e293b] flex flex-col">
          <p className="text-left text-gray-400 font-semibold text-base md:text-2xl">
            Blog
          </p>
          <h1 className="text-left text-white font-semibold text-2xl md:text-[2.5rem]">
            Learn how to build your business prescence online
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            To sign up to our weekly newsletter enter your email below.
          </p>
          <form
            // onSubmit={handleSubmit}
            className="flex flex-row gap-2"
          >
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="Email"
              className="bg-transparent text-white w-full md:w-1/3 text-sm font-light border px-3 py-2 rounded"
            />
            <button
              type="submit"
              className="border border-gray-100 w-max p-2 px-4 text-sm font-light transition-all hover:opacity-70 text-white rounded"
            >
              {!status ? (
                <p>Submit</p>
              ) : status === "loading" ? (
                <p>Sending ...</p>
              ) : status === "done" ? (
                <p>Sent!</p>
              ) : null}
            </button>
          </form>
        </div>

        <div className="mt-10 h-screen px-4 md:px-20">
          <div className="flex-row flex-wrap gap-10 mb-8 w-full flex items-center justify-center">
            {/* {posts.map((post: any) => (
              <PostCard post={post} key={post.fields.slug} />
            ))} */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;

// export const getStaticProps = async () => {
//   const response = await client.getEntries({ content_type: "post" });

//   return {
//     props: {
//       posts: response.items,
//       revalidate: 60,
//     },
//   };
// };
