import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CumplesWebPart.module.scss';
import * as strings from 'CumplesWebPartStrings';

import * as $ from 'jquery';
import 'bootstrap';

require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');

export interface ICumplesWebPartProps {
  description: string;
}

export default class CumplesWebPart extends BaseClientSideWebPart<ICumplesWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <style>
    .card-box2 {
        position: relative;
        color: #fff;
        padding: 20px 10px 40px;
        margin: 1px 0px;
    }
    .card-box2:hover {
        text-decoration: none;
        color: #f1f1f1;
    }
    .card-box2:hover .icon i {
        font-size: 50px;
        transition: 1s;
        -webkit-transition: 1s;
    }
    .card-box2 .inner2 {
        padding: 5px 10px 0 10px;
    }
    .card-box2 h3 {
        font-size: 27px;
        font-weight: bold;
        margin: 0 0 8px 0;
        white-space: nowrap;
        padding: 0;
        text-align: left;
    }
    .card-box2 p {
      font-size: 18px;
      font-weight: bold;
    }
    .card-box2 .icon2 {
      position: absolute;
      top: auto;
      bottom: 5px;
      right: 10px;
      z-index: 0;
      font-size: 35px;
        color: rgba(0, 0, 0, 0.4);
    }
    .card-box2 .card-box-footer2 {
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
    .card-box2:hover .card-box-footer2 {
        background: rgba(0, 0, 0, 0.3);
    }
    .bg-blue2 {
        background-color: #132f40 !important;
    }
    .bg-yellow2 {
        background-color: #e9c925 !important;
    }
   
    </style>
    <div class="row">
    <div class="col-lg-12 col-sm-12" style="padding-right: 1px;padding-left: 1px;">
    <div class="card-box2 bg-yellow2" style="padding-bottom: 10px;padding-top: 10px;">
        <div class="inner2" style="color:#132f40;">                
         
            <p> Cumpleaños del mes</p>
        </div>
        <div class="icon2" style="color:#132f40;">
        <i class="fas fa-birthday-cake" aria-hidden="true"></i>
        </div>
        <!--a href="#" class="card-box-footer" style="color:#132f40;">Ver más <i class="fa fa-arrow-circle-right"></i></a-->
    </div>
</div>
    </div>
    <div class="row" id="CumplesDiv"  style="height: 600px; overflow-y: scroll;"></div>
    
  <style>
  .card{
    margin: 5px;
  }
  </style>
    `;

    (<any>$(document)).ready(function () {
      $.ajax({
        url: "/_api/web/lists/getbytitle('Personas')/items?$top=1000",
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: function (data) {

          var today = new Date();
          //var dd = (<any>String(today.getDate())).padStart(2, '0');
          //var mm = (<any>String(today.getMonth() + 1)).padStart(2, '0'); //January is 0!
          //var yyyy = today.getFullYear();

          var mm = today.getMonth() + 1;
          var dd = today.getDate();


          $.each(data.d.results, function (key, value) {

            var html = '<div class="col-sm-12">' +
              '<div class="card">' +
              '<div class="card-body">' +
              '<div class="row">' +
              '<div class="col-sm-4">' +
              '<i class="fas fa-user-circle" style="font-size: 60px;"></i>' +
              '</div>' +
              '<div class="col-sm-8">' +
              '<h5 class="card-title" style="font-size: 1rem;">' + value.NOMBRES + '</h5>' +
              '<i class="fas fa-birthday-cake"></i> ' + value.DIA + ' / ' + value.MES + '' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>';

              if( mm == parseInt(value.MES)){
                (<any>$('#CumplesDiv')).append(html);
              }

          });
        }
      });
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
