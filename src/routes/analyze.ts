import express, { Request, Response } from 'express';
import { TextEvaluator } from '../models/TextEvaluator';

const router = express.Router();

router.post('/analyze', (req: Request, res: Response) => {
	const { text } = req.body;
	console.log(text, text.length);

	res.send(new TextEvaluator(text).serializeResponse());
});

export { router as analyzerRouter };
