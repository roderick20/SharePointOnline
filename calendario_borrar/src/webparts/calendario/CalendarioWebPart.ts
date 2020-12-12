import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';


import * as strings from 'CalendarioWebPartStrings';

import * as $ from 'jquery';

import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

//require('../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');

export interface ICalendarioWebPartProps {
  description: string;
}

export default class CalendarioWebPart extends BaseClientSideWebPart<ICalendarioWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `

  
      <div id="calendar">
        
      </div>`;

    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin]
    });
    calendar.render();

    (<any>$(document)).ready(function () {


      

      /*$.ajax({
        url: "/_api/Web/SiteUsers",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
        },
        error: function (data) {
          alert("Error: " + data);
        }
      });*/

      $.ajax({
        url: "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
        },
        error: function (data) {
          alert("Error: " + data);
        }
      });

      /*$.ajax({
        url: "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
        },
        error: function (data) {
          alert("Error: " + data);
        }
      });*/

     
 

      /*$.ajax({
        url: "/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='i:0#.f|membership|eflores@egasa.com.pe'",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
        },
        error: function (data) {
          alert("Error: " + data);
        }
      });*/


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
