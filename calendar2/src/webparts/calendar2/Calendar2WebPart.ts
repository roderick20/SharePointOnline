import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Calendar2WebPart.module.scss';
import * as strings from 'Calendar2WebPartStrings';

import * as $ from 'jquery';
import 'bootstrap';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');

export interface ICalendar2WebPartProps {
  description: string;
}

export default class Calendar2WebPart extends BaseClientSideWebPart<ICalendar2WebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <style>
    .card-box1 {
        position: relative;
        color: #fff;
        padding: 20px 10px 40px;
        margin: 1px 0px;
    }
    .card-box1:hover {
        text-decoration: none;
        color: #f1f1f1;
    }
    .card-box1:hover .icon1 i {
        font-size: 50px;
        transition: 1s;
        -webkit-transition: 1s;
    }
    .card-box1 .inner1 {
        padding: 5px 10px 0 10px;
    }
    .card-box1 h3 {
        font-size: 27px;
        font-weight: bold;
        margin: 0 0 8px 0;
        white-space: nowrap;
        padding: 0;
        text-align: left;
    }
    .card-box1 p {
      font-size: 18px;
      font-weight: bold;
    }
    .card-box1 .icon1 {
      position: absolute;
      top: auto;
      bottom: 5px;
      right: 10px;
      z-index: 0;
      font-size: 35px;
        color: rgba(0, 0, 0, 0.4);
    }
    .card-box1 .card-box-footer1 {
        position: absolute;
        left: 0px;
        bottom: 0px;
        text-align: center;
        padding: 3px 0;
        color: rgba(255, 255, 255, 0.8);
        background: rgba(0, 0, 0, 0.1);
        width: 100%;
        text-decoration: none;
    }
    .card-box1:hover .card-box-footer1 {
        background: rgba(0, 0, 0, 0.3);
    }
    .bg-blue1 {
        background-color: #132f40 !important;
    }
    .bg-yellow1 {
        background-color: #e9c925 !important;
    }   
    </style>
    <div class="row">
    <div class="col-lg-12 col-sm-12" style="padding-right: 1px;padding-left: 1px;">
    <div class="card-box1 bg-yellow1" style="padding-bottom: 10px;padding-top: 10px;">
        <div class="inner1" style="color:#132f40;">                
         
            <p> Calendario empresarial</p>
        </div>
        <div class="icon1" style="color:#132f40;">
        <i class="fas fa-calendar-alt" aria-hidden="true"></i>
        </div>
    </div>
</div>
  </div><br/>
  <div id='calendar'></div>
    `;

    (<any>$(document)).ready(function () {

      var calendarEl = document.getElementById('calendar');
      var calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        locale: 'es',
        firstDay: 1,
      });
      calendar.render();






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
