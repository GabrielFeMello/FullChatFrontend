import { ChatContext } from "../contexts/chat";
import { useContextSelector } from "use-context-selector";

export function useChat() {
  const chatName = useContextSelector(ChatContext, (chat) => chat.chatName);

  return {
    chatName,
  };
}
