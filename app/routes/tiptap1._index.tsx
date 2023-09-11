import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "~/components/MenuBar";

const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

export default function Tiptap1() {
  return (
    <main>
      <h1>Tiptap 1</h1>
      <EditorProvider
        extensions={extensions}
        content={content}
        slotBefore={<MenuBar/>}
        slotAfter={"After"}
      >
        <FloatingMenu>This is the floating menu</FloatingMenu>
        <BubbleMenu>This is the bubble menu</BubbleMenu>
      </EditorProvider>
    </main>
  );
}
