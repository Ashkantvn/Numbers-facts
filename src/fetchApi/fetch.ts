import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { inputsDataType } from "../types/types";

const useFetch: any = () => {
  const [inputsData, setinputsData] = useState<inputsDataType | null>(null);

  ///filter numbers by type
  const number = () => {
    switch (inputsData?.type) {
      case "trivia":
        return inputsData.number;
      case "year":
        return inputsData.year;
      case "date":
        return `${inputsData.month}/${inputsData.day}`;
      case "math":
        return inputsData.math_number;
      default:
        return "random";
    }
  };

  ////get data from api
  const getData = async () => {
    try {
      const response = await axios(
        `http://numbersapi.com/${number()}/${inputsData?.type}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const {data:facts , refetch } = useQuery(["facts"], getData);


  return [facts,inputsData, setinputsData, refetch ];
};

export default useFetch;
