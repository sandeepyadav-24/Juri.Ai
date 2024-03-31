interface prop {
  title: string;
  description: string;
  benefit: string;
  key: number;
}
const FeatureBox = (props: prop) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
      <h1>{props.benefit}</h1>
    </div>
  );
};
export default FeatureBox;
