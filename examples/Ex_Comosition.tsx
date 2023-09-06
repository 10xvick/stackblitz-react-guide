export default function Ex_Composition() {
  return (
    <div>
      <Wrapper>
        ----
        <Child />
        ----
      </Wrapper>
    </div>
  );
}

function Wrapper({ children }) {
  return <div>{children}</div>;
}

function Child() {
  return <div> child </div>;
}
