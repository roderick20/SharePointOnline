import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EnlacesWebPart.module.scss';
import * as strings from 'EnlacesWebPartStrings';




import * as $ from 'jquery';
import 'bootstrap';

require('../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');
require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');


export interface IEnlacesWebPartProps {
  description: string;
}

export default class EnlacesWebPart extends BaseClientSideWebPart<IEnlacesWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <style>
    .card-box {
        position: relative;
        color: #fff;
        padding: 20px 10px 40px;
        margin: 20px 0px;
    }
    .card-box:hover {
        text-decoration: none;
        color: #f1f1f1;
    }
    .card-box:hover .icon i {
        font-size: 100px;
        transition: 1s;
        -webkit-transition: 1s;
    }
    .card-box .inner {
        padding: 5px 10px 0 10px;
    }
    .card-box h3 {
        font-size: 27px;
        font-weight: bold;
        margin: 0 0 8px 0;
        white-space: nowrap;
        padding: 0;
        text-align: left;
    }
    .card-box p {
        font-size: 15px;
    }
    .card-box .icon {
        position: absolute;
        top: auto;
        bottom: 5px;
        right: 5px;
        z-index: 0;
        font-size: 72px;
        color: rgba(0, 0, 0, 0.4);
    }
    .card-box .card-box-footer {
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
    .card-box:hover .card-box-footer {
        background: rgba(0, 0, 0, 0.3);
    }
    .bg-blue {
        background-color: #132f40 !important;
    }
   
    </style>
      <div class="row">
            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">               
                        <p> Convocatorias Internas </p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-bullhorn" aria-hidden="true"></i>
                    </div>
                    <a href="#" class="card-box-footer">Ver más <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">
                     
                        <p> Anexos <br>Telefónicos </p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-phone-alt" aria-hidden="true"></i>
                    </div>
                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">
                    
                        <p> Menu <br>Semanal </p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-utensils" aria-hidden="true"></i> 
                    </div>
                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">                
                     
                        <p> Buenas Prácticas en Gestión Pública </p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-award" aria-hidden="true"></i>
                    </div>
                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">                
                     
                        <p> Manuales <br>Intranet  </p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                    </div>
                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">                
                     
                        <p> Distintivo <br>ERS 2014 </p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-medal" aria-hidden="true"></i>
                    </div>
                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">                
                     
                        <p> Organigrama Empresarial  </p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-sitemap" aria-hidden="true"></i>
                    </div>
                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">                
                     
                        <p> Revista <br> El EGASIN</p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-file-invoice" aria-hidden="true"></i>
                    </div>
                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">                
                     
                        <p>Enlace <br> OnBase <br></p>
                    </div>
                    <div class="icon">
                    <i class="fas fa-globe" aria-hidden="true"></i>
                    </div>
                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card-box bg-blue">
                    <div class="inner">                
                     
                        <p>  Plan anual de contrataciones </p>
                    </div>
                    <div class="icon">
                    <i class="far fa-handshake" aria-hidden="true"></i>
                    </div>
                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>
      `;
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
