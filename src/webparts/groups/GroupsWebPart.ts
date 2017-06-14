import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'groupsStrings';
import { IGroupsWebPartProps } from './IGroupsWebPartProps';

import Vue from 'vue';
import App from './App.vue';


export default class GroupsWebPart extends BaseClientSideWebPart<IGroupsWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<div id="app"></div>`;

    // mount
    new Vue({
      el: '#app',
      render: h => h(App)
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
