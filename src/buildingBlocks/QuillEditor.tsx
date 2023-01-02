import dynamic from "next/dynamic";
import React from "react";

interface IQuillEditorProps {
  appearence: string;
  onQuillChanged: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}
const QuillEditor = (props: IQuillEditorProps) => {
  return (
      <QuillNoSSRWrapper
          className={props.appearence}
          theme="snow"
          readOnly={props.readOnly}
          modules={modules}
          formats={formats}
          onChange={(v) => {
            props.onQuillChanged(v);
          }}
          placeholder={
              props.placeholder ??
              "A beautiful post is a simple, yet eloquent one. Let's see what you've got!"
          }
      />
  );
};

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    ['bold', 'italic', 'underline', 'strike' ],
    [{ color: [] }, { background: [] }],
    [{ script: 'super' }, { script: 'sub' }],
    [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block' ],
    [{ list: 'ordered' }, { list: 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
    [ 'direction', { align: [] }],
    [ 'link', 'image', 'video', 'formula' ],
    [ 'clean' ]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default QuillEditor;
