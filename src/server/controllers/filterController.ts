import { Request, Response } from "express";

const data = [
  {
    activity: "Learn Express.js",
    availability: 0.25,
    type: "education",
    participants: 1,
    price: 0.1,
    accessibility: "Few to no challenges",
    duration: "hours",
    kidFriendly: true,
    link: "https://expressjs.com/",
    key: "3943506",
  },
  {
    activity: "Learn React.js",
    availability: 0.5,
    type: "education",
    participants: 1,
    price: 0.2,
    accessibility: "Some challenges",
    duration: "hours",
    kidFriendly: true,
    link: "https://reactjs.org/",
    key: "7890123",
  },
];

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
