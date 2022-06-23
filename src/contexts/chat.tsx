import React, { useState, useEffect, useRef, ReactNode } from "react";
import { createContext } from "use-context-selector";

interface ChatContextProps {
  chatName: string;
}

export const ChatContext = createContext<ChatContextProps>(
  {} as ChatContextProps
);

export const ChatProvider = ({ children }: any) => {
  const [chatName, setChatName] = useState("");

  useEffect(() => {
    setChatName("OPA");

    return () => setChatName("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    chatName,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
