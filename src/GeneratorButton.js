export default function GeneratorButton() {
  const [random, setRandom] = useState(textColor);
  return <button onClick={() => setRandom(randomColor)}>Click me</button>;
}
