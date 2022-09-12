import { useForm } from "react-hook-form";
import { BaseSyntheticEvent, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./header.css";
import useFetch from "../../fetchApi/fetch";

const Header = () => {
  const [facts, inputsData, setInputsData, reFetch] = useFetch();
  const [clicked, setClicked] = useState<boolean>(false);
  const [selectedType, setselectedType] = useState<string | null>(null);

  
  ////schema of form element with yup and useform hook
  const schema = yup.object().shape({
    type: yup.string().required(),
    number: yup.number().integer().min(0),
    year: yup.number().integer(),
    month: yup.number().integer().positive(),
    day: yup.number().integer().positive(),
    math_number: yup.number().integer().min(0),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  ///error message and button name
  const errorMessage: string|null = errors.type?.message
    ? errors.type?.message.toString()
    : null;

  const buttonName = clicked ? "submit again" : "submit";

  ////submit , click and select functions
  const handleSelect = (e: BaseSyntheticEvent) => {
    setselectedType((selectedType) => (selectedType = e.target.value));
  };

  const nameOfButtonHandler = () => {
    if(selectedType){
      setClicked((clicked) => !clicked);
    }
  };

  const onSubmit = (data: {}): void => {
    setInputsData(data);
    if (inputsData) {
      reFetch();
      setInputsData(null);
    }
  };

  ////return inputs by type
  const inputNumber = (): JSX.Element => {
    switch (selectedType) {
      case "trivia":
        return (
          <>
            <label>
              Enter number :
              <input type="number" {...register("number")} disabled={clicked} />
            </label>
          </>
        );
      case "year":
        return (
          <>
            <label>
              Enter year :
              <input type="number" {...register("year")} disabled={clicked} />
            </label>
          </>
        );
      case "date":
        return (
          <>
            <label>
              Enter day :
              <input type="number" {...register("day")} disabled={clicked} />
            </label>
            <label>
              Enter month :
              <input type="number" {...register("month")} disabled={clicked} />
            </label>
          </>
        );
      case "math":
        return (
          <>
            <label>
              Enter math number:
              <input
                type="number"
                {...register("math_number")}
                disabled={clicked}
              />
            </label>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <header className=" mt-5 flex flex-col items-center justify-center gap-2">
      <h1 className="brand font-bold">Numbers fact</h1>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter type
          <select
            {...register("type")}
            onChange={handleSelect}
            disabled={clicked}
          >
            <option value="">Enter type</option>
            <option value="trivia">Trivia</option>
            <option value="year">Year</option>
            <option value="date">Date</option>
            <option value="math">Math</option>
          </select>
        </label>
        <div className="mt-7 flex flex-col gap-8">{inputNumber()}</div>
        <button
          onClick={nameOfButtonHandler}
          className="mt-5 submit-button"
          type="submit"
        >
          {buttonName}
        </button>
      </form>
      <p className=" text-red-400">{errorMessage}</p>
    </header>
  );
};

export default Header;
