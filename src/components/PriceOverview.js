import '../Styles/PriceOverview.scss';
import { useSelector } from 'react-redux'
import { getDepth, getTop, getWidth, isWintergarten, selectPrice, selectPriceForDoors, selectPriceForSeitenKeile, selectPriceForTop } from '../state/app/appSlice';
// eslint-disable-next-line no-unused-expressions
export default function PriceOverview() {

  const selectedWidth = useSelector(getWidth);
  const selectedDepth = useSelector(getDepth);
  const selectedTop = useSelector(getTop);
  const isClosedWintergarten = useSelector(isWintergarten);

  const priceForTop = useSelector(selectPriceForTop);
  const priceForDimension = useSelector(selectPrice);
  const priceForDoors = useSelector(selectPriceForDoors);
  const priceForSeitenKeile = useSelector(selectPriceForSeitenKeile);

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>Kategorie</th>
            <th>Beschreibung</th>
            <th>Kosten</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maße</td>
            <td>{selectedWidth} x {selectedDepth}</td>
            <td>{priceForDimension} €</td>
          </tr>
          <tr>
            <td>Überdachung</td>
            <td>{selectedTop}</td>
            <td>{priceForTop} €</td>
          </tr>
          {isClosedWintergarten ?
            <tr>
              <td>Glasschiebeelemente</td>
              <td>Durchmesser: {isNaN(parseFloat(selectedDepth) + parseFloat(selectedDepth) + parseFloat(selectedWidth)) ? 0 : parseFloat(selectedDepth) + parseFloat(selectedDepth) + parseFloat(selectedWidth)} m</td>
              <td>{isNaN(priceForDoors) ? 0 : priceForDoors} €</td>
            </tr>
            : null}
          {isClosedWintergarten ?
            <tr>
              <td>Seitenkeile</td>
              <td> 2 x</td>
              <td>{isNaN(priceForSeitenKeile) ? 0 : priceForSeitenKeile} €</td>
            </tr>
            : null}

          <tr>
            <td>Gesamt</td>
            <td>-</td>
            <td>{priceForDimension + priceForTop + priceForDoors + priceForSeitenKeile} €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
