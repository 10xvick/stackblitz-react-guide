import Ex_HOC from "../examples/Ex_HOC";
import Ex_useCallback from "../examples/Ex_useCallback";
import Ex_useEffect from "../examples/Ex_useEffect";
import Ex_useMemo from "../examples/Ex_useMemo";
import Decorator_HOC from "../src/decorators/Decorator_HOC";

const components = [
  Ex_useEffect,Ex_useMemo,Ex_useCallback,Ex_HOC
].map(e=>Decorator_HOC(e));

export const Ex_container = () => {

  return (
    <div>
      <h1> React guide </h1>
      {
        components.map((E,i)=><E key={i}/>)
      }
    </div>
  );
};