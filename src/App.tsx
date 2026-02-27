import './App.css'
import Webcam from 'react-webcam'

function App() {

  return (
    <div>
      <h1>Tarea 2</h1>
      <h2>Elías Abraham Vasquez Soto - 201900131</h2>

      <div className="bordered-container" style={{ borderColor: "blanchedalmond", borderWidth: "5px", borderStyle: "solid" }}>
        <Webcam
          audio={false}
          screenshotFormat='image/jpeg'
          mirrored={true}
        />
      </div>

    </div>
  )
}

export default App
