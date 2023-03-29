import Footer from "../../components/footer";
import Header from "../../components/header";

function BaseTemplate(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
export default BaseTemplate;
