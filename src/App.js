import ReactMarkdown from "react-markdown";
import './App.css';

const App = () => {
  const chatmsgs = [
    {
      role:"assistant",
      content:"Hello how may I assist you ?",
    },
    {
      role:"assistant",
      content:"Please Tell...",
    },
    {
      role:"user",
      content:"wait",
    },
    {
      role:"assistant",
      content:"Please explain..",
    },
    {
      role:"user",
      content:"You're not good",
    },
    {
      role:"assistant",
      content:"Apologies !!!",
    },
  ]
  return (
    <div className="App">
      <h4>AI Assistant</h4>
      <div className="chatModule">
        <div className="chatWindow">
        {
          chatmsgs.map(msg=>(
            <div className="chatcontentbox">
              <ReactMarkdown>
                {msg.content}
              </ReactMarkdown>
            </div>        
          ))
        }
        </div>        
        <div className="chatprompt">
          <textarea className="querybox" placeholder="Ask me anything !"></textarea>
          <button className="sendbtn">Send</button>
        </div>        
      </div>
    </div>
  );
}

export default App;
