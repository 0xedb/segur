import EditorJs from "@editorjs/editorjs";

const EditorInit = () => {
  const editor = new EditorJs({
    holderId: "editor",
    onReady: () => console.log("editor is ready!")
  });
};

export { EditorInit };
