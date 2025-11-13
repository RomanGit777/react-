import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

// This provides a centralized store for all your queries.
// Think of it like Redux but for server data.
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!)
    .render(
    <QueryClientProvider client={queryClient}>
        <App/>
    </QueryClientProvider>
    )
