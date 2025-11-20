// ========================================
// Blog Management System with Markdown Support
// ========================================

class BlogManager {
    constructor() {
        this.blogGrid = document.getElementById('blogGrid');
        this.posts = [];
        this.postsPerPage = 6;
        this.currentPage = 1;
        this.init();
    }

    async init() {
        await this.loadBlogPosts();
        this.renderBlogPosts();
    }

    async loadBlogPosts() {
        try {
            // Try to load from blog posts index file
            const response = await fetch('blog/posts.json');
            if (response.ok) {
                const data = await response.json();
                this.posts = data.posts;
            } else {
                this.posts = this.getDefaultPosts();
            }
        } catch (error) {
            console.log('Using default blog posts');
            this.posts = this.getDefaultPosts();
        }
        
        // Sort posts by date (newest first)
        this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    getDefaultPosts() {
        return [
            {
                title: 'Understanding Neuro-Symbolic AI: Bridging Logic and Learning',
                excerpt: 'Exploring how neuro-symbolic approaches combine the strengths of neural networks and symbolic reasoning to create more interpretable and robust AI systems.',
                date: '2024-11-15',
                readingTime: '8 min',
                tags: ['AI Research', 'Neuro-Symbolic', 'Machine Learning'],
                slug: 'neuro-symbolic-ai-introduction'
            },
            {
                title: 'Continual Learning: Teaching AI to Learn Without Forgetting',
                excerpt: 'A deep dive into continual learning techniques and how they enable AI systems to acquire new knowledge while retaining previous learnings.',
                date: '2024-11-01',
                readingTime: '10 min',
                tags: ['Continual Learning', 'AI Research', 'Deep Learning'],
                slug: 'continual-learning-overview'
            },
            {
                title: 'Exploration vs Exploitation in Reinforcement Learning',
                excerpt: 'Understanding the fundamental trade-off in RL and modern approaches to balance exploration and exploitation for optimal agent performance.',
                date: '2024-10-20',
                readingTime: '12 min',
                tags: ['Reinforcement Learning', 'AI Research', 'Optimization'],
                slug: 'exploration-exploitation-rl'
            },
            {
                title: 'Building Trustworthy AI: Ethics and Explainability',
                excerpt: 'Examining the importance of ethical considerations and explainability in AI systems, and practical approaches to make AI more transparent.',
                date: '2024-10-05',
                readingTime: '7 min',
                tags: ['AI Ethics', 'Explainable AI', 'Research'],
                slug: 'trustworthy-ai-ethics'
            },
            {
                title: 'Meta-Learning: Learning How to Learn',
                excerpt: 'An introduction to meta-learning approaches that enable AI systems to quickly adapt to new tasks with minimal data.',
                date: '2024-09-22',
                readingTime: '9 min',
                tags: ['Meta-Learning', 'AI Research', 'Few-Shot Learning'],
                slug: 'meta-learning-introduction'
            },
            {
                title: 'Human-in-the-Loop AI: Designing Interactive Learning Systems',
                excerpt: 'Exploring how human feedback can be effectively integrated into AI training pipelines to improve performance and alignment.',
                date: '2024-09-10',
                readingTime: '11 min',
                tags: ['HITL', 'AI Research', 'Interactive Learning'],
                slug: 'human-in-loop-ai'
            }
        ];
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    renderBlogPosts() {
        if (!this.blogGrid) return;

        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const postsToShow = this.posts.slice(startIndex, endIndex);

        this.blogGrid.innerHTML = postsToShow.map(post => `
            <article class="blog-card">
                <div class="blog-meta">
                    <span class="blog-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${this.formatDate(post.date)}
                    </span>
                    <span class="blog-reading-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${post.readingTime}
                    </span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
                <a href="blog/${post.slug}.html" class="blog-link">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </article>
        `).join('');
    }

    filterByTag(tag) {
        const filtered = this.posts.filter(post => post.tags.includes(tag));
        return filtered;
    }

    searchPosts(query) {
        const lowerQuery = query.toLowerCase();
        return this.posts.filter(post => 
            post.title.toLowerCase().includes(lowerQuery) ||
            post.excerpt.toLowerCase().includes(lowerQuery) ||
            post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        );
    }
}

// ==================== Markdown Parser ====================
class MarkdownParser {
    constructor() {
        this.rules = [
            // Headers
            { pattern: /^### (.*$)/gim, replacement: '<h3>$1</h3>' },
            { pattern: /^## (.*$)/gim, replacement: '<h2>$1</h2>' },
            { pattern: /^# (.*$)/gim, replacement: '<h1>$1</h1>' },
            
            // Bold
            { pattern: /\*\*(.*?)\*\*/g, replacement: '<strong>$1</strong>' },
            { pattern: /\_\_(.*?)\_\_/g, replacement: '<strong>$1</strong>' },
            
            // Italic
            { pattern: /\*(.*?)\*/g, replacement: '<em>$1</em>' },
            { pattern: /\_(.*?)\_/g, replacement: '<em>$1</em>' },
            
            // Links
            { pattern: /\[(.*?)\]\((.*?)\)/g, replacement: '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>' },
            
            // Images
            { pattern: /!\[(.*?)\]\((.*?)\)/g, replacement: '<img src="$2" alt="$1" />' },
            
            // Code blocks
            { pattern: /```(.*?)```/gs, replacement: '<pre><code>$1</code></pre>' },
            
            // Inline code
            { pattern: /`(.*?)`/g, replacement: '<code>$1</code>' },
            
            // Lists
            { pattern: /^\* (.*$)/gim, replacement: '<li>$1</li>' },
            { pattern: /^\- (.*$)/gim, replacement: '<li>$1</li>' },
            
            // Blockquotes
            { pattern: /^\> (.*$)/gim, replacement: '<blockquote>$1</blockquote>' },
            
            // Horizontal rule
            { pattern: /^---$/gim, replacement: '<hr />' },
            
            // Line breaks
            { pattern: /\n\n/g, replacement: '</p><p>' }
        ];
    }

    parse(markdown) {
        let html = markdown;
        
        // Apply all rules
        this.rules.forEach(rule => {
            html = html.replace(rule.pattern, rule.replacement);
        });
        
        // Wrap in paragraphs
        html = '<p>' + html + '</p>';
        
        // Clean up nested paragraphs
        html = html.replace(/<p><\/p>/g, '');
        html = html.replace(/<p><h/g, '<h');
        html = html.replace(/<\/h([1-6])><\/p>/g, '</h$1>');
        html = html.replace(/<p><pre>/g, '<pre>');
        html = html.replace(/<\/pre><\/p>/g, '</pre>');
        html = html.replace(/<p><ul>/g, '<ul>');
        html = html.replace(/<\/ul><\/p>/g, '</ul>');
        html = html.replace(/<p><ol>/g, '<ol>');
        html = html.replace(/<\/ol><\/p>/g, '</ol>');
        
        // Wrap list items in ul
        html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
        
        return html;
    }
}

// ==================== Blog Post Template Generator ====================
class BlogTemplateGenerator {
    constructor() {
        this.parser = new MarkdownParser();
    }

    generateTemplate(post) {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${post.excerpt}">
    <meta name="keywords" content="${post.tags.join(', ')}">
    <meta name="author" content="Ajay D. Sudhir">
    
    <title>${post.title} - Ajay D. Sudhir</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../blog-post.css">
    
    <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">
</head>
<body>
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="../index.html" class="nav-logo">ADS</a>
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark/light mode">
                <svg class="sun-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg class="moon-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>
            <a href="../index.html" class="btn btn-secondary">← Back to Home</a>
        </div>
    </nav>

    <article class="blog-post">
        <header class="post-header">
            <div class="container">
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <span class="post-reading-time">${post.readingTime}</span>
                </div>
                <h1 class="post-title">${post.title}</h1>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </header>

        <div class="post-content">
            <div class="container">
                ${this.parser.parse(post.content)}
            </div>
        </div>

        <footer class="post-footer">
            <div class="container">
                <div class="author-bio">
                    <div class="author-info">
                        <h3>About the Author</h3>
                        <p>Ajay D. Sudhir is a Computer Science student at UNC Charlotte, researching AI and machine learning with a focus on neuro-symbolic architectures and continual learning.</p>
                    </div>
                    <div class="author-social">
                        <a href="https://github.com/ajaydsudhir" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/ajaydsudhir" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:ajaydsudhir@gmail.com">Email</a>
                    </div>
                </div>
                <a href="../index.html#blog" class="btn btn-primary">← Back to All Posts</a>
            </div>
        </footer>
    </article>

    <script src="../script.js"></script>
</body>
</html>
        `;
    }
}

// ==================== Initialize Blog Manager ====================
if (document.getElementById('blogGrid')) {
    document.addEventListener('DOMContentLoaded', () => {
        new BlogManager();
    });
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BlogManager, MarkdownParser, BlogTemplateGenerator };
}
