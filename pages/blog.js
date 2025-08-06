import React from 'react'
import Head from 'next/head'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

export default function Blog({ blogs }) {
  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Helper function to calculate read time
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  // Helper function to parse tags
  const parseTags = (tagsString) => {
    if (!tagsString) return [];
    try {
      return JSON.parse(tagsString);
    } catch {
      return tagsString.split(',').map(tag => tag.trim());
    }
  };

  return (
    <>
      <Head>
        <title>Blog - Creator Circle</title>
        <meta name="description" content="Read the latest blog posts from Creator Circle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.container}>
        <main className={styles.mainblog}>
          <div className={styles.header}>
            <h1 className={styles.pageTitle}>Blogs</h1>
            <p className={styles.pageDescription}>
              Discover the latest insights, tutorials, and tips for modern web development
            </p>
            <div className={styles.blogCount}>
              {blogs.length} {blogs.length === 1 ? 'article' : 'articles'} published
            </div>
          </div>

          <div className={styles.blogsGrid}>
            {blogs.map((blogItem) => {
              const tags = parseTags(blogItem.tags);
              
              return (
                <article className={styles.blogItem} key={blogItem.slug}>
                  <div className={styles.blogHeader}>
                    <div className={styles.blogDate}>
                      {formatDate(blogItem.createdAt)}
                    </div>
                    <div className={styles.readTime}>
                      {calculateReadTime(blogItem.content)}
                    </div>
                  </div>

                  {tags.length > 0 && (
                    <div className={styles.blogTags}>
                      {tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className={styles.blogTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link href={`/blogpost/${blogItem.slug}`}>
                    <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
                  </Link>
                  
                  <p className={styles.blogItempara}>
                    {blogItem.metadesc?.length > 140 
                      ? `${blogItem.metadesc.substr(0, 140)}...` 
                      : blogItem.metadesc}
                  </p>

                  <div className={styles.blogFooter}>
                    <div className={styles.blogCategory}>
                      By {blogItem.author}
                    </div>
                    <Link href={`/blogpost/${blogItem.slug}`} className={styles.readMoreBtn}>
                      Read More →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {blogs.length === 0 && (
            <div className={styles.endMessage}>
              <h3>No Blog Posts Found</h3>
              <p>Check back later for new content!</p>
              <Link href="/" className={styles.backHome}>
                Back to Home
              </Link>
            </div>
          )}
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs = await res.json();

  return {
    props: { blogs },
  };
}
