import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

export default async function handle(req: any, res: any) {
    const { title, content } = req.body;
    console.log('🚀  title:', title);
    console.log('🚀  content:', content);

    const session = await getSession({ req });
    if (!session || !session.user.email) {
        res.status(401).json({ error: 'You must be logged in to create a post.' });
        return;
    }


    const result = await prisma.post.create({
        data: {
            title: title,
            content: content,
            author: { connect: { email: session?.user?.email } },
        },
    });
    res.json(result);
}