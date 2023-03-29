export default function Box(props) {
  return (
    <div style={{ background: "yellow" }}>
      <h1>{props.children}</h1>
      <button onClick={props.msg}>CLique</button>
    </div>
  );
}
