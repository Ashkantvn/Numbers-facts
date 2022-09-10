import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query/build/types/packages/react-query/src/QueryClientProvider";
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className="container">App</div>
    </QueryClientProvider>
  );
}

export default App;
