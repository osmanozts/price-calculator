import '../App.css';
import '../Styles/CustomCheckBox.css'

import CustomSelector from '../components/CustomSelector';
import { useDispatch } from 'react-redux'
import { SET_SELECTED_DEPTH, SET_SELECTED_TOP, SET_SELECTED_WIDTH } from '../state/app/appSlice';
import PriceOverview from './PriceOverview';
import CustomCheckBox from './CustomCheckBox';
// eslint-disable-next-line no-unused-expressions
export default function Wrapper() {

  const dispatchRedux = useDispatch();

  const width = ['3.00', '4.00', '5.00', '6.00', '7.00', '8.00'];
  const depth = ['2.50', '3.00', '3.50', '4.00', '4.50', '5.00'];
  const uberdachungen = ['Polycarbon', 'Glas', 'Milchglas',];

  return (
    <div>
      <div className="Main-Container">
        <CustomSelector array={width} title='Breite' callback={(temp) => dispatchRedux(SET_SELECTED_WIDTH(temp))} />
        <CustomSelector array={depth} title='Tiefe' callback={(temp) => dispatchRedux(SET_SELECTED_DEPTH(temp))} />
        <CustomSelector array={uberdachungen} title='Überdachung' callback={(temp) => dispatchRedux(SET_SELECTED_TOP(temp))} />
        <CustomCheckBox label={'Test'} callback={() => { console.log('hello') }} />

        <div>
          <PriceOverview />
        </div>

      </div>
    </div>
  );
}
