import dynamic from "next/dynamic";
import React from "react";

interface IQuillEditorProps {
  onQuillChanged: (value: string) => void;
  placeholder?: string;
}
const QuillEditor = (props: IQuillEditorProps) => {
  return (
    <QuillNoSSRWrapper
      className={'quill'}
      theme="snow"
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
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
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
