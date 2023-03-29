import Header from "../../components/header";

function Dashboardemplate(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
export default Dashboardemplate;
