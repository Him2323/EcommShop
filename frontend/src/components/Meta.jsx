import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to ParadiseStore",
  description: "Find your paradise here! we sell the best products for cheap",
  keywords:
    "Paradise Store, shopping, products, cheap electronics products, buy best products",
};

export default Meta;
