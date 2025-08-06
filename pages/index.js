import Head from "next/head";
import Image from "next/image";
import script from "next/script"
import Link from "next/link"
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Creator Circle - Hub for Content Creators</title>
        <meta name="description" content="Join Creator Circle - the ultimate hub for content creators. Learn growth strategies, discover AI tools, and master social media marketing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <div className={styles.hero}>
            <h1 className={styles.title}>
              <span className={styles.gradient}>Creator Circle</span>
            </h1>
            <p className={styles.description}>
              The ultimate hub for content creators and social media growth
            </p>
            <Link href="/blog" className={styles.ctaButton}>
              <div className={styles.ctaContent}>
                <img src="/youtubeicon.webp" alt="YouTube" className={styles.ctaIcon} />
                <div className={styles.ctaText}>
                  <span className={styles.ctaTitle}>Join creators growing on all platforms</span>
                  <span className={styles.ctaSubtitle}>Get exclusive insights & strategies</span>
                </div>
                <div className={styles.ctaArrow}>→</div>
              </div>
            </Link>
            <div className={styles.imgwrap}>
              <img 
                className={styles.myimg} 
                src="/homeing.jpg" 
                alt="Creator Circle - Content Creator Hub" 
                width={600} 
                height={400} 
              />
            </div>
          </div>

                  <section className={styles.blogsSection}>
          <h2 className={styles.sectionTitle}>Latest Creator Insights</h2>
          <div className={styles.blogsGrid}>
            <article className={styles.blogCard}>
              <div className={styles.cardHeader}>
                <img src="/youtubeicon.webp" alt="YouTube" className={styles.cardIcon} />
                <h3>Instagram Growth Strategies That Actually Work in 2025</h3>
              </div>
              <p>Master Instagram growth with proven strategies for Reels, engagement, and community building. Get real results, not just followers.</p>
              <Link href="/blog" className={styles.readMore}>Read More →</Link>
            </article>
            <article className={styles.blogCard}>
              <div className={styles.cardHeader}>
                <h3>10 AI Tools Every Content Creator Needs in 2025</h3>
              </div>
              <p>Discover the essential AI tools that can transform your content workflow. Boost productivity, enhance creativity, and stay ahead.</p>
              <Link href="/blog" className={styles.readMore}>Read More →</Link>
            </article>
            <article className={styles.blogCard}>
              <div className={styles.cardHeader}>
                <h3>Content Creation Strategies</h3>
              </div>
              <p>Learn advanced content strategies, monetization techniques, and growth hacking methods used by top creators worldwide.</p>
              <Link href="/blog" className={styles.readMore}>Read More →</Link>
            </article>
          </div>
          <div className={styles.viewAllBlogs}>
            <Link href="/blog" className={styles.viewAllBtn}>
              View All Creator Content
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How Creators Help Each Other</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💡</div>
                <h3>Share Real Solutions</h3>
                <p>Creators share practical solutions to challenges they've actually faced and solved.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🛠️</div>
                <h3>Tool Recommendations</h3>
                <p>Get honest reviews and recommendations for tools that creators actually use daily.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3>Strategy Breakdowns</h3>
                <p>Learn step-by-step breakdowns of strategies that worked for real creators.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🤝</div>
                <h3>Community Support</h3>
                <p>Connect with fellow creators who understand your challenges and celebrate your wins.</p>
              </div>
            </div>
          </div>
        </section>



        {/* Platforms Section */}
        <section className={styles.platformsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Grow on Every Platform That Matters</h2>
            <p className={styles.sectionDescription}>Master content creation across all major social media platforms</p>
            <div className={styles.platformsGrid}>
              <div className={styles.platformCard}>
                <img src="/youtubeicon.webp" alt="YouTube" className={styles.platformIcon} />
                <h3>YouTube</h3>
                <p>Long-form content, monetization, and subscriber growth strategies</p>
              </div>
              <div className={styles.platformCard}>
                <div className={styles.platformIcon}>📸</div>
                <h3>Instagram</h3>
                <p>Reels, Stories, IGTV, and aesthetic feed optimization</p>
              </div>
              <div className={styles.platformCard}>
                <div className={styles.platformIcon}>🎵</div>
                <h3>TikTok</h3>
                <p>Viral content creation, trending sounds, and algorithm mastery</p>
              </div>
              <div className={styles.platformCard}>
                <div className={styles.platformIcon}>🐦</div>
                <h3>Twitter/X</h3>
                <p>Thread writing, engagement strategies, and community building</p>
              </div>
              <div className={styles.platformCard}>
                <div className={styles.platformIcon}>💼</div>
                <h3>LinkedIn</h3>
                <p>Professional content, networking, and B2B growth strategies</p>
              </div>
              <div className={styles.platformCard}>
                <div className={styles.platformIcon}>🎪</div>
                <h3>Twitch</h3>
                <p>Live streaming, community engagement, and gaming content</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Creators Are Saying</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"Creator Circle helped me grow from 10K to 500K followers in just 6 months. The strategies actually work!"</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>💎</div>
                    <div>
                      <div className={styles.authorName}>Sarah Ahmed</div>
                      <div className={styles.authorTitle}>Instagram Influencer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"The AI tools section saved me 20 hours per week. Now I can focus on creating instead of editing!"</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>🎬</div>
                    <div>
                      <div className={styles.authorName}>Muhammad Hassan</div>
                      <div className={styles.authorTitle}>YouTube Creator</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"I went from $0 to $15K/month using their monetization strategies. Life-changing!"</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>🔥</div>
                    <div>
                      <div className={styles.authorName}>Fatima Khan</div>
                      <div className={styles.authorTitle}>Content Entrepreneur</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className={styles.finalCtaSection}>
          <div className={styles.container}>
            <div className={styles.finalCtaCard}>
              <h2>Ready to Share & Learn?</h2>
              <p>Help fellow creators solve real problems while learning from their experiences</p>
              <div className={styles.ctaButtons}>
                <Link href="/blog" className={styles.primaryBtn}>
                  Read Creator Solutions
                </Link>
                <Link href="/write" className={styles.secondaryBtn}>
                  Share Your Solution
                </Link>
              </div>
            </div>
          </div>
        </section>
        </main>
        
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
              <div className={styles.footerLeft}>
                <h3>Creator Circle</h3>
                <p>Empowering creators to build, grow, and monetize their passion.</p>
              </div>
              <div className={styles.footerCenter}>
                <div className={styles.footerSocial}>
                  <span className={styles.followText}>Follow Saad:</span>
                  <div className={styles.socialLinks}>
                    <a href="https://www.youtube.com/@Connectsaad" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <span className={styles.socialIcon}>🎬</span>
                    </a>
                    <a href="https://www.instagram.com/connect.saad/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <span className={styles.socialIcon}>📸</span>
                    </a>
                    <a href="https://www.facebook.com/connectlsaad/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <span className={styles.socialIcon}>👥</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.footerRight}>
                <div className={styles.footerContact}>
                  <Link href="/contact" className={styles.contactLink}>Contact Us</Link>
                </div>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>&copy; 2025 Creator Circle. Built with ❤️ for content creators by Saad Yousuf.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
