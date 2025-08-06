import React, { useRef, useEffect, useState } from 'react';
import styles from '@/styles/RichTextEditor.module.css';

const RichTextEditor = ({ value, onChange, placeholder = "Start writing your blog content..." }) => {
  const editorRef = useRef(null);
  const [isToolbarSticky, setIsToolbarSticky] = useState(false);

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value]);

  useEffect(() => {
    const handleScroll = () => {
      if (editorRef.current) {
        const rect = editorRef.current.getBoundingClientRect();
        setIsToolbarSticky(rect.top <= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
    handleContentChange();
  };

  const handleContentChange = () => {
    if (editorRef.current && onChange) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertHeading = (level) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedText = range.toString() || 'Heading Text';
      
      // Create heading element
      const heading = document.createElement(`h${level}`);
      heading.textContent = selectedText;
      
      // Replace selection with heading
      range.deleteContents();
      range.insertNode(heading);
      
      // Move cursor after heading
      range.setStartAfter(heading);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
      
      handleContentChange();
    }
  };

  const insertList = (type) => {
    execCommand(type === 'ul' ? 'insertUnorderedList' : 'insertOrderedList');
  };

  const toggleFormat = (format) => {
    execCommand(format);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
    handleContentChange();
  };

  const handleKeyDown = (e) => {
    // Handle Enter key for better paragraph formatting
    if (e.key === 'Enter' && !e.shiftKey) {
      document.execCommand('formatBlock', false, 'p');
    }
  };

  const toolbarButtons = [
    { label: 'H1', action: () => insertHeading(1), title: 'Heading 1' },
    { label: 'H2', action: () => insertHeading(2), title: 'Heading 2' },
    { label: 'H3', action: () => insertHeading(3), title: 'Heading 3' },
    { label: '|', type: 'separator' },
    { label: 'B', action: () => toggleFormat('bold'), title: 'Bold', style: { fontWeight: 'bold' } },
    { label: 'I', action: () => toggleFormat('italic'), title: 'Italic', style: { fontStyle: 'italic' } },
    { label: 'U', action: () => toggleFormat('underline'), title: 'Underline', style: { textDecoration: 'underline' } },
    { label: '|', type: 'separator' },
    { label: '• List', action: () => insertList('ul'), title: 'Bullet List' },
    { label: '1. List', action: () => insertList('ol'), title: 'Numbered List' },
    { label: '|', type: 'separator' },
    { label: 'Quote', action: () => execCommand('formatBlock', 'blockquote'), title: 'Quote' },
    { label: 'Link', action: () => {
        const url = prompt('Enter URL:');
        if (url) execCommand('createLink', url);
      }, title: 'Insert Link' }
  ];

  return (
    <div className={styles.editorContainer}>
      <div className={`${styles.toolbar} ${isToolbarSticky ? styles.sticky : ''}`}>
        <div className={styles.toolbarContent}>
          {toolbarButtons.map((button, index) => (
            button.type === 'separator' ? (
              <span key={index} className={styles.separator}>|</span>
            ) : (
              <button
                key={index}
                type="button"
                className={styles.toolbarButton}
                onClick={button.action}
                title={button.title}
                style={button.style}
              >
                {button.label}
              </button>
            )
          ))}
        </div>
      </div>
      
      <div
        ref={editorRef}
        className={styles.editor}
        contentEditable
        onInput={handleContentChange}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
      />
      
      <div className={styles.editorFooter}>
        <p className={styles.tip}>
          💡 <strong>Tip:</strong> Select text and use the toolbar buttons to format. 
          Press Enter for new paragraphs, Shift+Enter for line breaks.
        </p>
      </div>
    </div>
  );
};

export default RichTextEditor;