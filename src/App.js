

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import QuizParent from "./QuizParent"

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<QuizParent/>}/>
   </Routes>
   </BrowserRouter>
   
      
   </>
  );
}

export default App;
