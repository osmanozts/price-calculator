import './App.css';
import { Provider} from 'react-redux'
import {store} from './state/store'
import Wrapper from './components/Wrapper';
// eslint-disable-next-line no-unused-expressions
function App() {

  return (
    <Provider store={store}>
    <Wrapper />
    </Provider>
  );
}


export default App;
