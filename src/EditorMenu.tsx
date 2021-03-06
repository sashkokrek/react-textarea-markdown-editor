import * as React from 'react';
import EditorMarker from './EditorMarker';
import EditorMenuDropdown from './EditorMenuDropdown';
// @ts-ignore
import editIcon from './icon/edit.svg';
// @ts-ignore
import previewIcon from './icon/eye.svg';
// @ts-ignore
import helpIcon from './icon/help.svg';
// @ts-ignore
import linkIcon from './icon/link.svg';
// @ts-ignore
import orderedListIcon from './icon/ordered-list.svg';
// @ts-ignore
import unorderedListIcon from './icon/unordered-list.svg';
import languages from './lang.json';
import { IMarkerGroup } from './type';

export interface IEditorMenuProps {
  isEditing?: boolean;
  toggleEdit?: () => void;
  language: string;
  readOnly: boolean;
  markers?: IMarkerGroup[];
}

const EditorMenu: React.FunctionComponent<IEditorMenuProps> = (props) => {
  const { toggleEdit, isEditing, language, readOnly } = props;
  let { markers } = props;
  if (!markers) {
    markers = [
      {
        key: 'header',
        markers: [
          {
            key: 'header',
            markers: [
              {
                key: 'h1',
                marker: '# ',
                name: <b>H1</b>,
                title: languages[language].header1,
                type: 'line-marker',
              },
              {
                key: 'h2',
                marker: '## ',
                name: <b>H2</b>,
                title: languages[language].header2,
                type: 'line-marker',
              },
              {
                key: 'h3',
                marker: '### ',
                name: <b>H3</b>,
                title: languages[language].header3,
                type: 'line-marker',
              },
            ],
            type: 'dropdown',
          },
        ],
      },
      {
        key: 'text',
        markers: [
          {
            key: 'text',
            markers: [
              {
                defaultText: 'bold',
                key: 'bold',
                name: <b>{languages[language].bold}</b>,
                prefix: '**',
                suffix: '**',
                title: languages[language].bold,
                type: 'marker',
              },
              {
                defaultText: 'italic',
                key: 'italic',
                name: <i>{languages[language].italic}</i>,
                prefix: '*',
                suffix: '*',
                title: languages[language].italic,
                type: 'marker',
              },
              {
                defaultText: 'strikethrough',
                key: 'strikethrough',
                name: <del>{languages[language].strikethrough}</del>,
                prefix: '~~',
                suffix: '~~',
                title: languages[language].strikethrough,
                type: 'marker',
              },
              {
                key: 'blockquote',
                marker: '> ',
                name: languages[language].blockquote,
                title: languages[language].blockquote,
                type: 'line-marker',
              },
              {
                defaultText: 'inline code',
                key: 'inline-code',
                name: languages[language].inlineCode,
                prefix: '`',
                suffix: '`',
                title: languages[language].inlineCode,
                type: 'marker',
              },
              {
                defaultText: 'code',
                key: 'code',
                multipleLine: true,
                name: languages[language].code,
                prefix: '```',
                suffix: '```',
                title: languages[language].code,
                type: 'marker',
              },
            ],
            type: 'dropdown',
          },
        ],
      },
      {
        key: 'list',
        markers: [
          {
            key: 'unordered-list',
            marker: '* ',
            name: <img alt="" src={unorderedListIcon} />,
            title: languages[language].unorderedList,
            type: 'line-marker',
          },
          {
            key: 'ordered-list',
            marker: '1. ',
            name: <img alt="" src={orderedListIcon} />,
            title: languages[language].orderedList,
            type: 'line-marker',
          },
        ],
      },
      {
        key: 'additional',
        markers: [
          {
            defaultText: 'text',
            key: 'link',
            name: <img alt="" src={linkIcon} />,
            prefix: '[',
            suffix: '](url)',
            title: languages[language].link,
            type: 'marker',
          },
        ],
      },
    ];
  }
  return (
    <div className="tme-menu">
      {isEditing &&
        markers.map((group) => (
          <ul key={group.key} className="tme-menu-group left">
            {group.markers.map((marker) => {
              switch (marker.type) {
                case 'dropdown':
                  return <EditorMenuDropdown key={marker.key} config={marker} />;
                default:
                  return (
                    <li className="tme-menu-item" key={marker.key} title={marker.title}>
                      <EditorMarker config={marker} />
                    </li>
                  );
              }
            })}
          </ul>
        ))}
      <ul className="tme-menu-group right">
        <li className="tme-menu-item tme-link">
          <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">
            <img alt="" src={helpIcon} />
          </a>
        </li>
        {!readOnly && (
          <li
            className="tme-menu-item"
            onClick={() => toggleEdit!()}
            title={isEditing ? languages[language].preview : languages[language].edit}
          >
            <span className="tme-menu-item-inner">
              <img alt="" src={isEditing ? previewIcon : editIcon} />
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default EditorMenu;
