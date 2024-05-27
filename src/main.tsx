import "./main.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { TimerProvider, useTimer } from "./TimerContext";

// const memoryHistory = createMemoryHistory({
//   initialEntries: ['/'],
// })

// Create a new router instance
const router = createRouter({
  routeTree,
  context: undefined!,
  //history: memoryHistory,
  basepath: "/training-app/"
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const context = useTimer()
  return <RouterProvider router={router} context={context}/>;
}
// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <TimerProvider>
        <App />
      </TimerProvider>
    </StrictMode>
  );
}
