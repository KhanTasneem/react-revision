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
## 📌 React + TypeScript Revision Plan

| Day | Concept                   | TS Focus                                   | Example Drill                   |
| --- | ------------------------- | ------------------------------------------ | ------------------------------- |
| 1   | Props & State             | Props interface, `useState` generics       | Counter with reset (done today) |
| 2   | `useEffect` + Cleanup     | `useEffect` deps typing                    | API fetch + cleanup             |
| 3   | Lists & Keys              | Typing arrays of objects                   | Render typed list               |
| 4   | Forms                     | Controlled inputs with `ChangeEvent` types | Simple form                     |
| 5   | Conditional Rendering     | Union types, optional props                | Role-based UI                   |
| 6   | Context API               | Context typing with `createContext`        | Theme switcher                  |
| 7   | Custom Hooks              | Generic hook return types                  | `useFetch` hook                 |
| 8   | `useReducer`              | Action & State interfaces                  | Todo reducer                    |
| 9   | `useMemo` & `useCallback` | Memoizing typed functions                  | Expensive calc example          |
| 10  | Component Composition     | Props children typing                      | Card component                  |
| 11  | Code Splitting            | `React.lazy` typing                        | Lazy loaded pages               |
| 12  | Error Boundaries          | ErrorBoundary typing                       | Error handling UI               |
| 13  | Testing Basics            | Props typing in tests                      | Test a typed comp               |
| 14  | Performance Patterns      | `React.memo` + TS                          | Prevent extra renders           |

# Formik + MUI touched handling — Quick Notes
- Works
<Field as={TextField} /> → Formik injects onBlur/onChange automatically. (recommended)
<TextField onBlur={handleBlur} /> → Manual wiring, works fine.

- Doesn’t work
<Field component={TextField} /> → MUI’s <TextField> is not a raw input; Formik’s component prop doesn’t auto-bind onBlur to the inner input.

- Fix for component
Use render props or a custom wrapper to spread { field, form } into MUI <TextField>.

