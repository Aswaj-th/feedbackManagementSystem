const workerFunction = function () {
   self.onmessage = (event: MessageEvent) => {
      if(event.data === "start") {
         fetch("http://localhost:8000/api/feedbacks")
        .then(data => data.json())
        .then((data) => {
            postMessage(data);
        })
      }
   };
};

const codeToString = workerFunction.toString();
const mainCode = codeToString.substring(codeToString.indexOf('{') + 1, codeToString.lastIndexOf('}'));
const blob = new Blob([mainCode], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

export default worker_script;