import renderer from 'react-test-renderer';
import CityCard from '../components/cityCard';
import { BrowserRouter as Router} from 'react-router-dom';

it("renders correctly", () => {
  const tree = renderer
    .create(
    <Router>
        <CityCard />
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
