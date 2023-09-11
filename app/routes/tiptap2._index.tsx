import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

export default function Tiptap2() {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <main>
      <h1>Tiptap 2</h1>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor || undefined}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor || undefined}>This is the bubble menu</BubbleMenu>
    </main>
  );
}
