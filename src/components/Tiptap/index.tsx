import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useMemo } from 'react';
import './style.scss';
import BulletList from '@assets/icons/BulletList';
import Bold from '@assets/icons/bold';
import Italic from '@assets/icons/Italic';

const Menubar = ({ editor }: { editor: Editor }) => {
  const menuItems = useMemo(() => {
    return [
      {
        label: 'bold',
        icon: <Bold />,
        onClick: () => editor.chain().focus().toggleBold().run(),
      },
      {
        label: 'bulletList',
        icon: <BulletList />,
        onClick: () => editor.chain().focus().toggleBulletList().run(),
      },
      {
        label: 'italic',
        icon: <Italic />,
        onClick: () => editor.chain().focus().toggleItalic().run(),
      },
    ];
  }, [editor]);

  return (
    <div className="w-full bottom-0 left-0 right-0 flex">
      {menuItems.map((item, i) => (
        <button key={i} onClick={item.onClick} className="bg-white rounded-none">
          {item.icon}
        </button>
      ))}
    </div>
  );
};

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p></p>',
  });

  return (
    <>
      <Menubar editor={editor} />
      <EditorContent editor={editor} className="editor" />
    </>
  );
};

export default Tiptap;
