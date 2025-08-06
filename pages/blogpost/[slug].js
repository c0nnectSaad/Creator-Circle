import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from "../../styles/Blogpost.module.css";

export default function Slug({ blog }) {
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
      <Head>
        <title>{blog?.title} - Creator Circle</title>
        <meta name="description" content={blog?.metadesc || "Read this blog post on Creator Circle"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <main className={styles.mainblog}>
          <Link href="/blog" className={styles.backLink}>
            Back to Blog
          </Link>

          <article>
            <h1 className={styles.title}>{blog?.title}</h1>

            <div className={styles.meta}>
              <div className={styles.date}>
                {new Date(blog.createdAt).toDateString()}
              </div>
              <div className={styles.readTime}>
                5 min read
              </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.content}>
              <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const blog = await res.json();

  return {
    props: { blog },
  };
}
