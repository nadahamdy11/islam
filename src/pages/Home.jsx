import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Excersise from "../components/Excersise";
import { useState } from "react";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercise={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excersise
        setExercise={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
