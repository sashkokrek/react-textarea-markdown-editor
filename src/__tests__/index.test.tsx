import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TextareaMarkdownEditor from '../TextareaMarkdownEditor';

describe('TextareaMarkdownEditor', () => {
  test('TextareaMarkdownEditor should initialize as it is', () => {
    const component = renderer.create(<TextareaMarkdownEditor id="123" doParse={it => it} />);
    const testInstance = component.root;
    const { props } = testInstance.findByType(TextareaMarkdownEditor);
    expect(props.id).toBe('123');

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
