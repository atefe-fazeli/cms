import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./themeContext";
import ApiProvider from "./apiContext";
import AuthServiceProvider from "./authContext";
import TestProvider from "./testContext";

function ContexManager({ children }) {
  return (
    <BrowserRouter>
      <AuthServiceProvider>
        <ApiProvider>
          <TestProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </TestProvider>
        </ApiProvider>
      </AuthServiceProvider>
    </BrowserRouter>
  );
}

export default ContexManager;
