import React from 'react';
import Head from 'next/head';
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Creator Circle</title>
        <meta name="description" content="Learn about Creator Circle - a platform built for passionate content creators with high-quality insights, growth strategies, and community support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>About Creator Circle</h1>
          <p className={styles.subtitle}>
            Empowering content creators through knowledge sharing and community-driven insights
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.sectionContent}>
              Creator Circle is a community-driven platform where content creators share real solutions to real problems. 
              Our mission is to create an authentic space where creators help each other grow through practical insights, 
              honest tool recommendations, and proven strategies. We believe in genuine value over hype, 
              real experiences over fake promises.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What Makes Us Different</h2>
            <p className={styles.sectionContent}>
              We focus on authenticity and practical value for content creators:
            </p>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>Real solutions from creators who've actually faced and solved these challenges</li>
              <li className={styles.serviceItem}>Honest reviews of tools and platforms that creators actually use</li>
              <li className={styles.serviceItem}>Step-by-step breakdowns of strategies that worked for real people</li>
              <li className={styles.serviceItem}>Platform-specific growth tactics for YouTube, Instagram, TikTok, and more</li>
              <li className={styles.serviceItem}>Community support from fellow creators who understand your journey</li>
              <li className={styles.serviceItem}>Open platform where any creator can share their knowledge and experiences</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Built by Creators, for Creators</h2>
            <p className={styles.sectionContent}>
              Creator Circle was founded by Saad, a content creator who experienced firsthand the challenges of growing 
              in the digital space. Frustrated by the lack of authentic, practical advice, he created this platform 
              as a space where creators could share genuine insights without the marketing fluff.
            </p>
            <p className={styles.sectionContent}>
              Every piece of content here comes from real experience. Every tool recommendation has been tested. 
              Every strategy shared has produced actual results. This is not about selling dreams – 
              it's about sharing solutions that work.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Join the Community</h2>
            <p className={styles.sectionContent}>
              Whether you're just starting your creator journey or you're an experienced content creator looking to 
              help others, Creator Circle is your space. Share your wins, your challenges, and your solutions. 
              Learn from others who've walked the path before you.
            </p>
            <p className={styles.sectionContent}>
              Ready to be part of a community that values authenticity over vanity metrics? 
              Start by reading our creator insights or share your own story to help fellow creators succeed.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
