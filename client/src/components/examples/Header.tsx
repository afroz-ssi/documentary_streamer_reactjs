import { useState } from 'react'
import { Header } from '../Header'
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export default function HeaderExample() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  
  return (
    <QueryClientProvider client={queryClient}>
      <Header
        theme={theme}
        onThemeToggle={() => {
          setTheme(theme === "light" ? "dark" : "light")
          console.log('Theme toggled:', theme)
        }}
      />
    </QueryClientProvider>
  )
}
