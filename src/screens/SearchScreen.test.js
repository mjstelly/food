import ShallowRenderer from 'react-test-renderer/shallow';
import SearchScreen from './SearchScreen';

describe('SearchScreen snapshot test', () => {
    it('renders correctly', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<SearchScreen />);

        const result = renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});
