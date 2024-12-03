function CardNumber(data: { num: number }) {
  return (
    <div className="mx-2 my-1 px-2 py-1 border rounded-lg ">
      <p>{data.num} </p>
    </div>
  );
}
export default CardNumber;
