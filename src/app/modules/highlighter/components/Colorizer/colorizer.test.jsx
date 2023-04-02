import {render } from '@testing-library/react';
import Colorizer from './colorizer';

const renderTree = tree => render(tree);
describe('<Colorizer>', () => {
  it('should render component', () => {
    const {asFragment} =  renderTree(<Colorizer languageElement={
      {
      word : 'const',
      clasification : 'declarations',
      error : false
    }}/>)

    expect(asFragment()).toMatchSnapshot()
  });
  
});