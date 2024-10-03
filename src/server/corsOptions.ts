const allowedOriginsList: string[] = [
  "http://localhost:5173",
  "http://localhost:4000",
  "https://my-bored-activities.netlify.app",
];

const corsOptions = {
  origin: allowedOriginsList,
};

export default corsOptions;
