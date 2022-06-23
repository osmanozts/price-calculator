import '../App.css';
import '../Styles/CustomCheckBox.css'

import CustomSelector from '../components/CustomSelector';
import { useDispatch, useSelector } from 'react-redux'
import { getDepth, getTop, getWidth, isWintergarten, SET_SELECTED_DEPTH, SET_SELECTED_TOP, SET_SELECTED_WIDTH, TOGGLE_IS_WINTERGARTEN } from '../state/app/appSlice';
import PriceOverview from './PriceOverview';
import CustomCheckBox from './CustomCheckBox';
// eslint-disable-next-line no-unused-expressions
export default function Wrapper() {

  const dispatchRedux = useDispatch();

  const width = ['3.00', '4.00', '5.00', '6.00', '7.00', '8.00'];
  const depth = ['2.50', '3.00', '3.50', '4.00', '4.50', '5.00'];
  const uberdachungen = ['Polycarbon', 'Glas', 'Milchglas'];

  const selectedWidth = useSelector(getWidth);
  const selectedDepth = useSelector(getDepth);
  const selectedTop = useSelector(getTop);

  const isClosedWintergarten = useSelector(isWintergarten);

  return (
    <div>
      <div className="Main-Container">
        <CustomSelector array={width} title='Breite' defaultValue={selectedWidth} callback={(temp) => dispatchRedux(SET_SELECTED_WIDTH(temp))} />
        <CustomSelector array={depth} title='Tiefe' defaultValue={selectedDepth} callback={(temp) => dispatchRedux(SET_SELECTED_DEPTH(temp))} />
        <CustomSelector array={uberdachungen} title='Überdachung' defaultValue={selectedTop} callback={(temp) => dispatchRedux(SET_SELECTED_TOP(temp))} />
        <CustomCheckBox label={'geschlossener Wintergarten'} checked={isClosedWintergarten} callback={() => dispatchRedux(TOGGLE_IS_WINTERGARTEN())} />

        <div>
          <PriceOverview />
        </div>

      </div>
    </div>
  );
}
