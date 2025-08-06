import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    const { page = 1, limit = 6, tags } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const selectedTags = tags ? tags.split(',') : [];
    
    // Read all blog files
    let data = await fs.readdir("blogdata");
    let allBlogs = [];
    
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      const myfile = await fs.readFile(('blogdata/' + item), 'utf-8');
      const blogData = JSON.parse(myfile);
      
      // Add some metadata for better UX
      blogData.id = item.replace('.json', '');
      blogData.publishDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString();
      
      allBlogs.push(blogData);
    }
    
    // Filter by tags if provided
    if (selectedTags.length > 0) {
      allBlogs = allBlogs.filter(blog => 
        blog.tags && blog.tags.some(tag => selectedTags.includes(tag))
      );
    }
    
    // Sort blogs by title for consistency (you can change this logic)
    allBlogs.sort((a, b) => a.title.localeCompare(b.title));
    
    // Calculate pagination
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedBlogs = allBlogs.slice(startIndex, endIndex);
    
    // Calculate if there are more pages
    const hasMore = endIndex < allBlogs.length;
    const totalPages = Math.ceil(allBlogs.length / limitNum);
    
    res.status(200).json({
      blogs: paginatedBlogs,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalBlogs: allBlogs.length,
        hasMore,
        limit: limitNum
      }
    });
    
  } catch (error) {
    console.error('Error fetching paginated blogs:', error);
    res.status(500).json({ 
      error: 'Failed to fetch blogs',
      message: error.message 
    });
  }
}