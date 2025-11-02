import { AdminSidebar } from '../AdminSidebar'
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export default function AdminSidebarExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminSidebar
        onLogout={() => console.log('Logout clicked')}
      />
    </QueryClientProvider>
  )
}
