import express, { Request, Response } from 'express';
import { TextEvaluator } from '../models/TextEvaluator';

const router = express.Router();

router.post('/analyze', (req: Request, res: Response) => {
	const { text } = req.body;

	res.send(TextEvaluator.serializeResponse(text));
});

export { router as analyzerRouter };
