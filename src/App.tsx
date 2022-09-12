import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import Header from "./parts/header/Header";
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        enabled:false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <div className="container"><Header/></div>
    </QueryClientProvider>
  );
}

export default App;
