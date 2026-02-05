import { WelcomeBar } from './features/WelcomeBar/index'
import { FileContainer } from './features/Layout/FileContainer'

function App() {

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <FileContainer />
      <WelcomeBar />
    </div>
  )
}

export default App
