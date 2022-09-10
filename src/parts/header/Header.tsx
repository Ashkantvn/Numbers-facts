import { useForm } from "react-hook-form";
const Header = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: {}): void => {
    console.log(data);
  };
  return (
    <header>
      <h1>Numbers fact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter type
          <select {...register("type")}>
            <option value="trivia">Trivia</option>
            <option value="year">Year</option>
            <option value="date">Date</option>
            <option value="math">Math</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </header>
  );
};
export default Header;
