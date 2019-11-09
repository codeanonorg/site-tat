import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
	const { query: { name } } = req;
	res.status(200).json({ name });
}
