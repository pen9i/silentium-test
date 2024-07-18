import { z } from 'zod';

export const storySchema = z.object({
	id: z.number().optional(),
	deleted: z.boolean().optional(),
	type: z.string().optional(),
	by: z.string().optional(),
	time: z.number().optional(),
	text: z.string().optional(),
	dead: z.boolean().optional(),
	kids: z.array(z.number()).optional(),
	score: z.number().optional(),
	url: z.string().optional(),
	title: z.string().optional(),
});

export type Story = z.infer<typeof storySchema>;
