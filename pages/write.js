import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Toast from '@/components/Toast';
import RichTextEditor from '@/components/RichTextEditor';
import styles from '@/styles/Write.module.css';

const AVAILABLE_TAGS = [
  'AI',
  'Instagram',
  'YouTube',
  'TikTok',
  'Business',
  'Success Stories',
  'Viral Marketing',
  'Growth Strategies',
  'Tools'
];

const Write = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    content: ''
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({
      ...prev,
      content: content
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.author.trim() || !formData.description.trim()) {
      setToastMessage('Please fill in all required fields.');
      setToastType('error');
      setShowToast(true);
      return;
    }

    if (!formData.content.trim() || formData.content === '<p><br></p>' || formData.content === '') {
      setToastMessage('Please write some content for your blog post.');
      setToastType('error');
      setShowToast(true);
      return;
    }

    if (selectedTags.length === 0) {
      setToastMessage('Please select at least one tag for your blog.');
      setToastType('error');
      setShowToast(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const newBlog = {
        title: formData.title.trim(),
        slug: generateSlug(formData.title),
        content: formData.content.trim(),
        author: formData.author.trim(),
        metadesc: formData.description.trim().substring(0, 160),
        tags: selectedTags.join(', ')
      };

      const res = await fetch('/api/postblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setToastMessage('Blog post created successfully! Redirecting to blog list...');
      setToastType('success');
      setShowToast(true);

      setFormData({ title: '', author: '', description: '', content: '' });
      setSelectedTags([]);

      setTimeout(() => {
        router.push('/blog');
      }, 2000);

    } catch (error) {
      console.error('Error creating blog:', error);
      setToastMessage('Failed to create blog post. Please try again.');
      setToastType('error');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else if (selectedTags.length < 2) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setToastMessage('You can select maximum 2 tags only.');
      setToastType('error');
      setShowToast(true);
    }
  };

  return (
    <>
      <Head>
        <title>Write a New Post - Creator Circle</title>
        <meta name="description" content="Share your knowledge with the Creator Circle community. Write and publish your content creation insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Write a New Post</h1>
          <p className={styles.description}>
            Share your insights, tips, and experiences with the Creator Circle community.
            Help fellow creators grow and succeed in their journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>Blog Title *</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="author" className={styles.label}>Author Name *</label>
            <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.label}>Blog Description (SEO Meta Description) *</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className={`${styles.input} ${styles.textarea}`} rows="3" placeholder="Brief description for SEO and social media previews (160 characters max)" required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Blog Content *</label>
            <RichTextEditor
              value={formData.content}
              onChange={handleContentChange}
              placeholder="Start writing your blog content here. Use the toolbar above to format your text with headings, bold, italic, lists, and more..."
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Select Tags (max 2)</label>
            <div className={styles.tagSelection}>
              {AVAILABLE_TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`${styles.tagButton} ${selectedTags.includes(tag) ? styles.tagSelected : ''}`}
                  disabled={!selectedTags.includes(tag) && selectedTags.length >= 2}
                >
                  {tag} {selectedTags.includes(tag) && '✓'}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.submitSection}>
            <button type="submit" className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ''}`} disabled={isSubmitting}>
              {isSubmitting ? 'Publishing...' : 'Publish Post'}
            </button>
          </div>
        </form>
      </div>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default Write;
