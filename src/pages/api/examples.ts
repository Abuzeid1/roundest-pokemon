// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import doBackfill from "../../../scripts/fill-db";
import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  // create Pokemon records
  // const examples = await doBackfill()
  // console.table(examples)
  res.status(200).json({"hello": "mom"});
};

export default examples;
