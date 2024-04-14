import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ChatsPage from "./pages/ChatsPage.jsx";
import { ChatProvider } from "./Context/ChatProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatsPage />} />
        </Routes>
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App;
