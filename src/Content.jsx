import { Route, Routes } from "react-router-dom";


export function Content(props) {

  return (
    <div className="content">

      <Routes>
        <Route path="/" element={<h2>Content here!</h2>}/>
      </Routes>
    </div>
  )
}