const StyledNumbers = () => {
  const randomNumbers = [1, 5, 8, 9, 6, 4, 7, 2, 3];
  const mappedRandomNumbers = randomNumbers.map((number) => {
    return <span className={"number-"+number} key={number}>{number}</span>;
  });
  return <>{mappedRandomNumbers}</>;
};
export default StyledNumbers;
