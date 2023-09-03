
// Define a Higher Order Component (HOC) as a function
const withColor = (WrappedComponent, color) => {
  // Return a new functional component
  return (props) => {
    // Enhance the original component with a new prop
    // that sets the text color
    const style = {
      color: color,
    };

    // Render the wrapped component with the enhanced prop
    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// Create a simple component
const MyComponent = (props) => {
  return <div>This is my component</div>;
};

// Use the HOC to enhance MyComponent
const RedTextComponent = withColor(MyComponent, 'red');

// Now, use the enhanced component
export default function Ex_HOC() {
  return (
    <div>
      <MyComponent />
      <RedTextComponent />
    </div>
  );
}

