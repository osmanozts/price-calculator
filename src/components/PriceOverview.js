import '../Styles/PriceOverview.scss';
import { useSelector } from 'react-redux'
import { getDepth, getTop, getWidth, selectPrice, selectPriceForTop } from '../state/app/appSlice';
// eslint-disable-next-line no-unused-expressions
export default function PriceOverview() {

  const selectedWidth = useSelector(getWidth);
  const selectedDepth = useSelector(getDepth);
  const selectedTop = useSelector(getTop);

  const priceForTop = useSelector(selectPriceForTop);
  const priceForDimension = useSelector(selectPrice);

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
          <tr>
            <td>Gesamt</td>
            <td>-</td>
            <td>{priceForDimension + priceForTop} €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
