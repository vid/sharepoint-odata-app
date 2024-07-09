import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import EntryForm from './components/EntryForm';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { IMyAppProps } from './components/IMyAppProps';
import { fetchOpenSearchDescription, parseOpenSearchXML } from './utils/fetchOpenSearchDescription';

export interface IMyAppWebPartProps {
  description: string;
}

export default class MyAppWebPart extends BaseClientSideWebPart<IMyAppWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IMyAppProps> = React.createElement(
      EntryForm,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'My SharePoint App'
          },
          groups: [
            {
              groupName: 'Settings',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Description'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
