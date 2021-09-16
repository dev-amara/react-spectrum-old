import React from "react";
import { FallbackProps } from "react-error-boundary";

export const ErrorFallback: React.FC<FallbackProps> = props => {
  const { error, resetErrorBoundary } = props;

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};