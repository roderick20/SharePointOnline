import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CumplenyosMesWebPart.module.scss';
import * as strings from 'CumplenyosMesWebPartStrings';

import * as $ from 'jquery';
import 'bootstrap';
require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');

export interface ICumplenyosMesWebPartProps {
  description: string;
}

export default class CumplenyosMesWebPart extends BaseClientSideWebPart<ICumplenyosMesWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <a class="nav-link active" id="Enero-tab" data-toggle="tab" href="#Enero" role="tab" aria-controls="Enero" aria-selected="true">      
      Enero
      </a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Febrero-tab" data-toggle="tab" href="#Febrero" role="tab" aria-controls="Febrero" aria-selected="false">Febrero</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Marzo-tab" data-toggle="tab" href="#Marzo" role="tab" aria-controls="Marzo" aria-selected="false">Marzo</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Abril-tab" data-toggle="tab" href="#Abril" role="tab" aria-controls="Abril" aria-selected="false">Abril</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Mayo-tab" data-toggle="tab" href="#Mayo" role="tab" aria-controls="Mayo" aria-selected="false">Mayo</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Junio-tab" data-toggle="tab" href="#Junio" role="tab" aria-controls="Junio" aria-selected="false">Junio</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Julio-tab" data-toggle="tab" href="#Julio" role="tab" aria-controls="Julio" aria-selected="false">Julio</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Agosto-tab" data-toggle="tab" href="#Agosto" role="tab" aria-controls="Agosto" aria-selected="false">Agosto</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Setiembre-tab" data-toggle="tab" href="#Setiembre" role="tab" aria-controls="Setiembre" aria-selected="false">Setiembre</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Octubre-tab" data-toggle="tab" href="#Octubre" role="tab" aria-controls="Octubre" aria-selected="false">Octubre</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Noviembre-tab" data-toggle="tab" href="#Noviembre" role="tab" aria-controls="Noviembre" aria-selected="false">Noviembre</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="Diciembre-tab" data-toggle="tab" href="#Diciembre" role="tab" aria-controls="Diciembre" aria-selected="false">Diciembre</a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="Enero" role="tabpanel" aria-labelledby="Enero-tab">
    <div class="row" id="EneroDiv"></div>
    </div>
    <div class="tab-pane fade" id="Febrero" role="tabpanel" aria-labelledby="Febrero-tab">
    <div class="row" id="FebreroDiv"></div>
    </div>
    <div class="tab-pane fade" id="Marzo" role="tabpanel" aria-labelledby="Marzo-tab">
    <div class="row" id="MarzoDiv"></div>
    </div>
    <div class="tab-pane fade" id="Abril" role="tabpanel" aria-labelledby="Abril-tab">
    <div class="row" id="AbrilDiv"></div>
    </div>
    <div class="tab-pane fade" id="Mayo" role="tabpanel" aria-labelledby="Mayo-tab">
    <div class="row" id="MayoDiv"></div>
    </div>
    <div class="tab-pane fade" id="Junio" role="tabpanel" aria-labelledby="Junio-tab">
    <div class="row" id="JunioDiv"></div>
    </div>
    <div class="tab-pane fade" id="Julio" role="tabpanel" aria-labelledby="Julio-tab">
    <div class="row" id="JulioDiv"></div>
    </div>
    <div class="tab-pane fade" id="Agosto" role="tabpanel" aria-labelledby="Agosto-tab">
    <div class="row" id="AgostoDiv"></div>
    </div>
    <div class="tab-pane fade" id="Setiembre" role="tabpanel" aria-labelledby="Setiembre-tab">
    <div class="row" id="SetiembreDiv"></div>
    </div>
    <div class="tab-pane fade" id="Octubre" role="tabpanel" aria-labelledby="Octubre-tab">
    <div class="row" id="OctubreDiv"></div>
    </div>
    <div class="tab-pane fade" id="Noviembre" role="tabpanel" aria-labelledby="Noviembre-tab">
    <div class="row" id="NoviembreDiv"></div>
    </div>
    <div class="tab-pane fade" id="Diciembre" role="tabpanel" aria-labelledby="Diciembre-tab">
    <div class="row" id="DiciembreDiv"></div>
    </div>
  </div>
  <style>
  .card{
    margin: 5px;
  }
  </style>
    `;


    (<any>$(document)).ready(function () {
      $.ajax({
        url: "/_api/web/lists/getbytitle('Personas')/items",
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: function (data) {

          $.each(data.d.results, function (key, value) {

            var html = '<div class="col-sm-3">' +
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

            switch (value.MES) {
              case 1:
                (<any>$('#EneroDiv')).append(html);
                break;
              case 2:
                (<any>$('#FebreroDiv')).append(html);
                break;
              case 3:
                (<any>$('#MarzoDiv')).append(html);
                break;
              case 4:
                (<any>$('#AbrilDiv')).append(html);
                break;
              case 5:
                (<any>$('#MayoDiv')).append(html);
                break;
              case 6:
                (<any>$('#JunioDiv')).append(html);
                break;
              case 7:
                (<any>$('#JulioDiv')).append(html);
                break;
              case 8:
                (<any>$('#AgostoDiv')).append(html);
                break;
              case 9:
                (<any>$('#SetiembreDiv')).append(html);
                break;
              case 10:
                (<any>$('#OctubreDiv')).append(html);
                break;
              case 11:
                (<any>$('#NoviembreDiv')).append(html);
                break;
              case 12:
                (<any>$('#DiciembreDiv')).append(html);
                break;
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
