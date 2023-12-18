function Food() {
  const food1 = "Pizza";
  const food2 = "Hamburger";
  return (
    <ul>
      <li>Dumpling</li>
      <li>{food1}</li>
      <li>{food2.toLocaleUpperCase()}</li>
    </ul>
  );
}

export default Food;
