# Create react new project using vite and ts
`npm create vite@latest my-app -- --template react-ts`
# Install MUI Core + Icons
`npm install @mui/material @emotion/react @emotion/styled @mui/icons-material`
# Folder structure
src/
│
├── assets/                # Images, icons, static files
├── components/            # Reusable components
│   ├── common/             # e.g., buttons, inputs
│   └── layout/             # e.g., Navbar, Footer
├── features/               # Feature-specific folders (Day 1, Day 2, etc.)
│   └── day1-props-state/
│       ├── components/
│       └── index.tsx
├── hooks/                  # Custom hooks
├── services/               # API calls (axios configs)
├── utils/                  # Helper functions
├── constants/              # Static data & enums
├── styles/                 # Global styles (optional)
├── App.tsx
└── main.tsx

# Configure Material UI Theme
We’ll set up a basic theme so all days’ drills look consistent.
src/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
