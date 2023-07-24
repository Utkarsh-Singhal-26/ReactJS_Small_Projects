import React, { useState } from "react";
import "./tailwind.output.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function App() {
  const codeString = `
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function App() {
  const codeString = '(num) => num + 1';

  return (
    <div className="flex justify-center items-center h-screen">
      <SyntaxHighlighter
        language="jsx"
        style={nightOwl}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
  `;

  const [copy, setCopy] = useState(false);

  return (
    <div className="bg-gray-700 flex justify-center items-center h-screen">
      <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
        <div className="flex justify-between px-4 text-white text-xs items-center bg-black">
          <p className="text-sm">Example Code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-base mt-1">
                <ion-icon name="checkmark-sharp"></ion-icon>
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className="text-base mt-1">
                <ion-icon name="clipboard-outline"></ion-icon>
              </span>
              Copy Code
            </button>
          )}
        </div>
        <SyntaxHighlighter language="jsx" style={nightOwl} wrapLongLines={true}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
