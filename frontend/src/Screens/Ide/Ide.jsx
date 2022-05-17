import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-clojure";
import "ace-builds/src-noconflict/mode-csharp";
// import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-r";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-scala";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-elixir";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-textmate";

import { submitCodeService, getLanguagesService } from "../../Service/service";

function onChange(newValue) {
  //   console.log("change", newValue);
}

const themes = [
  "monokai",
  "textmate",
  "github",
  "terminal",
  "tomorrow",
  "kuroir",
  "xcode",
  "pastel_on_dark",
  "solarized_dark",
];

const languages = [
  "java",
  "javascript",
  "typescript",
  "python",
  "c",
  "c++",
  "c#",
  "golang",
  "kotlin",
  "swift",
  "php",
  "rust",
  "scala",
  "sql",
  "elixir",
];

let langData = [
  {
    id: 45,
    name: "Assembly (NASM 2.14.02)",
  },
  {
    id: 46,
    name: "Bash (5.0.0)",
  },
  {
    id: 47,
    name: "Basic (FBC 1.07.1)",
  },
  {
    id: 75,
    name: "C (Clang 7.0.1)",
  },
  {
    id: 76,
    name: "C++ (Clang 7.0.1)",
  },
  {
    id: 48,
    name: "C (GCC 7.4.0)",
  },
  {
    id: 52,
    name: "C++ (GCC 7.4.0)",
  },
  {
    id: 49,
    name: "C (GCC 8.3.0)",
  },
  {
    id: 53,
    name: "C++ (GCC 8.3.0)",
  },
  {
    id: 50,
    name: "C (GCC 9.2.0)",
  },
  {
    id: 54,
    name: "C++ (GCC 9.2.0)",
  },
  {
    id: 86,
    name: "Clojure (1.10.1)",
  },
  {
    id: 51,
    name: "C# (Mono 6.6.0.161)",
  },
  {
    id: 77,
    name: "COBOL (GnuCOBOL 2.2)",
  },
  {
    id: 55,
    name: "Common Lisp (SBCL 2.0.0)",
  },
  {
    id: 56,
    name: "D (DMD 2.089.1)",
  },
  {
    id: 57,
    name: "Elixir (1.9.4)",
  },
  {
    id: 58,
    name: "Erlang (OTP 22.2)",
  },
  {
    id: 44,
    name: "Executable",
  },
  {
    id: 87,
    name: "F# (.NET Core SDK 3.1.202)",
  },
  {
    id: 59,
    name: "Fortran (GFortran 9.2.0)",
  },
  {
    id: 60,
    name: "Go (1.13.5)",
  },
  {
    id: 88,
    name: "Groovy (3.0.3)",
  },
  {
    id: 61,
    name: "Haskell (GHC 8.8.1)",
  },
  {
    id: 62,
    name: "Java (OpenJDK 13.0.1)",
  },
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
  },
  {
    id: 78,
    name: "Kotlin (1.3.70)",
  },
  {
    id: 64,
    name: "Lua (5.3.5)",
  },
  {
    id: 89,
    name: "Multi-file program",
  },
  {
    id: 79,
    name: "Objective-C (Clang 7.0.1)",
  },
  {
    id: 65,
    name: "OCaml (4.09.0)",
  },
  {
    id: 66,
    name: "Octave (5.1.0)",
  },
  {
    id: 67,
    name: "Pascal (FPC 3.0.4)",
  },
  {
    id: 85,
    name: "Perl (5.28.1)",
  },
  {
    id: 68,
    name: "PHP (7.4.1)",
  },
  {
    id: 43,
    name: "Plain Text",
  },
  {
    id: 69,
    name: "Prolog (GNU Prolog 1.4.5)",
  },
  {
    id: 70,
    name: "Python (2.7.17)",
  },
  {
    id: 71,
    name: "Python (3.8.1)",
  },
  {
    id: 80,
    name: "R (4.0.0)",
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
  },
  {
    id: 73,
    name: "Rust (1.40.0)",
  },
  {
    id: 81,
    name: "Scala (2.13.2)",
  },
  {
    id: 82,
    name: "SQL (SQLite 3.27.2)",
  },
  {
    id: 83,
    name: "Swift (5.2.3)",
  },
  {
    id: 74,
    name: "TypeScript (3.7.4)",
  },
  {
    id: 84,
    name: "Visual Basic.Net (vbnc 0.0.0.5943)",
  },
];

const Ide = () => {
  const [themeSelected, setSelectedTheme] = useState(themes[6]);
  const [code, setCode] = useState("");
  const [showLangDrop, setShowLangDrop] = useState(false);
  const [editorLang, setEditorLang] = useState(languages[1]);
  const [userInput, setUserInput] = useState("");
  const [codeOutput, setCodeOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const CodeError = "Write a Code first"

  const handleSubmit = async () => {
    setLoading(true);
    if (code !== '') {
      let token = await submitCodeService(code, editorLang, userInput);
      console.log(code);
      console.log("Hello ,", await submitCodeService(code, editorLang, ""));
      console.log("Output : ", await token?.stdout);
      setCodeOutput(await token?.stdout);
    }
    else{
      setCodeOutput(CodeError)
    }
    setLoading(false);
  };


  return (
    <div className="">

      {/* Theme / Lang Selector */}
      <div className=" m-2 md:flex md:flex-row md:justify-between md:w-1/2">

        <div className="flex flex-row justify-between ">

          <select
            onChange={(e) => setSelectedTheme(e.target.value)}
            id="countries"
            className="cursor-pointer my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
          >
            {themes.map((theme) => {
              return <option value={theme}>{theme}</option>;
            })}
          </select>
          <button
            onClick={handleSubmit}
            className={`md:hidden relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${loading ? 'from-purple-400 to-blue-300 cursor-not-allowed' : 'from-purple-600 to-blue-500'}  group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white `}
            disabled={loading ? true : false}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 flex flex-row items-center justify-center">


              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="hidden md:block pl-2">
                Run Code
              </span>
            </span>
          </button>

        </div>

        <select
          onChange={(e) => {
            setEditorLang(e.target.value);
            console.log(e.target.value);
          }}
          className="cursor-pointer my-1 w-full md:w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        >
          {/* {languages.map((lang) => {
            return <option value={lang}>{lang}</option>;
          })} */}
          {langData.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`hidden min-w-fit md:block relative items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${loading ? 'from-purple-400 to-blue-300 cursor-not-allowed' : 'from-purple-600 to-blue-500'} group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white `}
          disabled={loading ? true : false}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 flex flex-row items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden md:block pl-2">
              Run Code
            </span>
          </span>


        </button>
      </div>


      <div className="md:flex md:flex-row ">


        {/* IDE */}
        <div className="md:w-1/2 h-1/2 md:mr-2">
          <AceEditor
            width="100%"
            height="90vh"
            placeholder="Enter your code here"
            mode="java"
            // mode={`${editorLang}`}
            theme={themeSelected}
            name="blah2"
            //   onLoad={this.onLoad}
            onChange={(a) => setCode(a)}
            fontSize={28}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>


        {/* Input and Output Box */}
        <div className="md:w-1/2 h-1/2 ">

          {/* Input Box */}
          <div className=' md:hidden'>
            <label
              for="message"
              class="block mb-2 text-sm font-medium "
            >
              {"Input"}
            </label>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              id="message"
              rows="5"
              class={`resize-none block p-2.5 w-full md:h-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${loading ? 'cursor-not-allowed' : ''}`}
              placeholder="Your Input..."
              disabled={loading ? true : false}
            ></textarea>
          </div>

          {/* Output Box */}
          <div className="">

            <label
              for="message"
              class="block mb-2 text-sm font-medium "
            >
              {"Output"}
            </label>
            <pre
              id="message"
              // rows=""
              class="overflow-y-scroll block p-2.5 w-full h-[50vh] text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            // placeholder="Your message..."
            // disabled
            // value={codeOutput}

            >
              {loading ?
                <div class=" rounded-md p-4 w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div> {codeOutput === undefined ?
                  <div className="text-xl">
                    <span className="text-red-700"> Error:</span> Something is Wrong
                  </div>
                  : codeOutput}
                </div>
              }



            </pre>



          </div>

          {/* Input Box */}
          <div className='hidden md:block'>
            <label
              for="message"
              class="block mb-2 text-sm font-medium "
            >
              {"Input"}
            </label>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              id="message"
              rows="5"
              class={`resize-none block p-2.5 w-full md:h-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${loading ? 'cursor-not-allowed' : ''}`}
              placeholder="Your Input..."
              disabled={loading ? true : false}
            ></textarea>
          </div>



        </div>


      </div>


    </div>
  );
};

const submitCode = () => { };

export default Ide;
