import ReactDOM from 'react-dom';
import { Index } from 'index';

jest.mock('react-dom', () => ({
  render: jest.fn()
}));

describe('Ost Front-end Code Test', () => {
  describe('Index', () => {
    it('should render', () => {
      expect(ReactDOM.render).toHaveBeenCalled();
    });
  });
});
