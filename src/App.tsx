import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';

const App = () => {
  return (
    <div className="h-full bg-gray-100">
      <div className="mx-auto h-[812px] max-h-screen w-[375px] max-w-full overflow-hidden rounded-[36px] bg-white">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
