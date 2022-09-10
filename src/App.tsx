import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className="container">App</div>
    </QueryClientProvider>
  );
}

export default App;
