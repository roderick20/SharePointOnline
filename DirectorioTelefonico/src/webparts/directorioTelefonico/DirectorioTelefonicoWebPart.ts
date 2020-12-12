import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './DirectorioTelefonicoWebPart.module.scss';
import * as strings from 'DirectorioTelefonicoWebPartStrings';

import * as $ from 'jquery';
import 'bootstrap';
import 'DataTables.net-bs4';

require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../../node_modules/datatables.net-bs4/css/datatables.bootstrap4.min.css');
require('../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');

export interface IDirectorioTelefonicoWebPartProps {
  description: string;
}

export default class DirectorioTelefonicoWebPart extends BaseClientSideWebPart<IDirectorioTelefonicoWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <div class="container">
    <div class="row">
       <div class="col-sm-12">
                <table id="tblMyDocs" class="table table-bordered table-sm" style="width: 100%">
                   <thead>
                      <tr>
                         <th>Área</th>
                         <th>Encargado</th>
                         <th>Anexo</th>
                         <th>Teléfono Fijo</th>                                              
                      </tr>
                   </thead>
                   <tbody>
                   </tbody>
                </table>
             </div>
          </div>
       </div>
    `;

    (<any>$(document)).ready(function () {

      $.ajax({
        url: "/_api/web/lists/getbytitle('TelefonosAdministrativos')/items",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {

          $.each(data.d.results, function (key, value) {

            var ENCARGADO = (value.ENCARGADO == null) ? "" : value.ENCARGADO;
            var ANEXO = (value.ANEXO_x0020_ == null) ? "" : + value.ANEXO_x0020_;
            var TELEFONO = (value.TELEFONO_x0020_FIJO == null) ? "" : + value.TELEFONO_x0020_FIJO;

            (<any>$('#tblMyDocs tbody')).append('<tr>' +
              '<td>' + value.Title + '</td>' +
              '<td>' + ENCARGADO + '</td>' +
              '<td>' + ANEXO + '</td>' +
              '<td>' + TELEFONO + '</td>' +
              '</tr>');
          });

          (<any>$('#tblMyDocs')).DataTable({
            "language": {
              "decimal": ",",
              "thousands": ".",
              "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
              "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
              "infoPostFix": "",
              "infoFiltered": "(filtrado de un total de _MAX_ registros)",
              "loadingRecords": "Cargando...",
              "lengthMenu": "Mostrar _MENU_ registros",
              "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
              },
              "processing": "Procesando...",
              "search": "Buscar:",
              "searchPlaceholder": "Término de búsqueda",
              "zeroRecords": "No se encontraron resultados",
              "emptyTable": "Ningún dato disponible en esta tabla",
              "aria": {
                "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sortDescending": ": Activar para ordenar la columna de manera descendente"
              }
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
