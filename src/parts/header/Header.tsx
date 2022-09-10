import { useForm } from "react-hook-form";
import { BaseSyntheticEvent, useState } from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const Header = () => {
  const [selectedType, setselectedType] = useState<string | null>(null);
  ////schema of form element with yup and useform hook
  const schema = yup.object().shape({
    type: yup.string().required(),
    number : yup.number().integer().min(0),
    year : yup.number().integer(),
    month : yup.number().integer().positive(),
    day : yup.number().integer().positive(),
    math_number : yup.number().integer().min(0)
  });
  
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  
  ////submit and select functions
  const handleSelect = (e: BaseSyntheticEvent) => {
    setselectedType((selectedType) => (selectedType = e.target.value));
  };
  const onSubmit = (data: {}): void => {
    console.log(data);
  };

  ////return inputs by type
  const inputNumber = (): JSX.Element => {
    switch (selectedType) {
      case "trivia":
        return (
          <>
            <label>
              Enter number :
              <input type="number" {...register("number")} />
            </label>
          </>
        );
      case "year":
        return (
          <>
            <label>
              Enter year :
              <input type="number" {...register("year")} />
            </label>
          </>
        );
      case "date":
        return (
          <>
            <label>
              Enter day :
              <input type="number" {...register("day")} />{" "}
            </label>
            <label>
              Enter month :
              <input type="number" {...register("month")} />
            </label>
          </>
        );
      case "math":
        return (
          <>
            <label>
              Enter math number:
              <input type="number" {...register("math_number")} />
            </label>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <header>
      <h1>Numbers fact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter type
          <select {...register("type")} onChange={handleSelect}>
            <option value=""></option>
            <option value="trivia">Trivia</option>
            <option value="year">Year</option>
            <option value="date">Date</option>
            <option value="math">Math</option>
          </select>
        </label>
        <div>{inputNumber()}</div>
        <button type="submit">Submit</button>
      </form>
    </header>
  );
};
export default Header;
