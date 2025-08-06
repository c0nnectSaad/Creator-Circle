import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
const prisma = new PrismaClient();

async function importBlogs() {
  try {
    console.log("🔍 Reading files from blogdata...");
    const files = await fs.readdir("./blogdata");

    if (files.length === 0) {
      console.log("⚠️ No blog files found in blogdata/");
      return;
    }

    for (const file of files) {
      console.log(`📄 Reading ${file}`);
      const content = await fs.readFile(`./blogdata/${file}`, "utf8");
      const blog = JSON.parse(content);

      console.log(`📥 Importing: ${blog.title}`);
      await prisma.blog.create({
        data: {
          title: blog.title,
          content: blog.content,
          author: blog.author || "admin",
          metadesc: blog.metadesc || blog.content.substring(0, 150),
          slug: blog.slug,
          tags: Array.isArray(blog.tags) ? blog.tags.join(",") : blog.tags || "",
        },
      });

      console.log(`✅ Imported: ${blog.title}`);
    }

    console.log("🎉 Done importing blogs");
  } catch (err) {
    console.error("❌ ERROR:", err);
  } finally {
    await prisma.$disconnect();
  }
}

importBlogs();
