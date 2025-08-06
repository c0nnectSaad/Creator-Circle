import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Validate request body
      const { name, email, phone, desc } = req.body;
      
      if (!name || !email || !desc) {
        return res.status(400).json({ 
          error: 'Missing required fields. Name, email, and message are required.' 
        });
      }

      // Validate email format (must contain @)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email) || !email.includes('@')) {
        return res.status(400).json({ 
          error: 'Invalid email format. Email must contain @ symbol.' 
        });
      }

      // Validate phone format if provided (must start with + and country code, no spaces)
      if (phone && phone.trim() !== '') {
        const phoneRegex = /^\+[1-9]\d{1,14}$/;
        if (!phoneRegex.test(phone)) {
          return res.status(400).json({ 
            error: 'Invalid phone format. Phone must start with + followed by country code and digits (no spaces). Example: +1234567890' 
          });
        }
      }

      console.log('Contact form submission:', req.body);

      // Save to MySQL database only
      const contact = await prisma.contact.create({
        data: {
          name,
          phone: phone || '',
          email,
          desc,
        },
      });

      res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.',
        id: contact.id
      });

    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ 
        error: 'Internal server error. Please try again later.' 
      });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
