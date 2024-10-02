import { Request, Response } from "express";
import { data } from "../../data.js";

export const filterData = (req: Request, res: Response): Response => {
  const { type } = req.query;

  if (!type) {
    return res
      .status(400)
      .json({ message: "Type query parameter is required." });
  }

  const filteredData = data.filter((item) => item.type === type);

  if (filteredData.length === 0) {
    return res
      .status(404)
      .json({ message: `No items found for type: ${type}` });
  }

  return res.status(200).json(filteredData);
};
