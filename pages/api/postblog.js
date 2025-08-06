import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, slug, content, author, metadesc, tags } = req.body;

    if (!title || !slug || !content || !author || !metadesc) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    try {
      const result = await prisma.blog.create({
        data: {
          title,
          slug,
          content,
          author,
          metadesc,
          tags,
        }
      });

      return res.status(200).json({ success: true, message: "Blog post saved to database!", blog: result });

    } catch (error) {
      console.error('❌ Error creating blog:', error);
      return res.status(500).json({ error: "Failed to save blog." });
    }
  } else {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
