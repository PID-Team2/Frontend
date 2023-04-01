import renderer from 'react-test-renderer';
import Colorizer from './colorizer';

const renderTree = tree => renderer.create(tree);
describe('<Colorizer>', () => {
  it('should render component', () => {
    expect(renderTree(<Colorizer 
    />).toJSON()).toMatchSnapshot();
  });
  
});