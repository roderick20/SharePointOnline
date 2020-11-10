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
    <div class="container">
    <!-- contacts card -->
    <div class="card card-default" id="card_contacts">
        <div id="contacts" class="panel-collapse collapse show" aria-expanded="true" style="">
            <ul class="list-group pull-down" id="contact-list">
                <li class="list-group-item">
                    <div class="row w-100">
                        <div class="col-12 col-sm-6 col-md-3 px-0">
                            <img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" class="rounded-circle mx-auto d-block img-fluid">
                        </div>
                        <div class="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span class="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                            <label class="name lead">Mike Anamendolla</label>
                            <br> 
                            <span class="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
                            <span class="text-muted">5842 Hillcrest Rd</span>
                            <br>
                            <span class="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                            <span class="text-muted small">(870) 288-4149</span>
                            <br>
                            <span class="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
                            <span class="text-muted small text-truncate">mike.ana@example.com</span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row w-100">
                        <div class="col-12 col-sm-6 col-md-3 px-0">
                            <img src="http://demos.themes.guide/bodeo/assets/images/users/m105.jpg" alt="Seth Frazier" class="img-fluid rounded-circle d-block mx-auto">
                        </div>
                        <div class="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span class="name lead">Seth Frazier</span>
                            <br>
                            <span class="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="7396 E North St"></span>
                            <span class="text-muted">7396 E North St</span>
                            <br>
                            <span class="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(560) 180-4143"></span>
                            <span class="text-muted small">(560) 180-4143</span>
                            <br>
                            <span class="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="seth.frazier@example.com"></span>
                            <span class="text-muted small text-truncate">seth.frazier@example.com</span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row w-100">
                        <div class="col-12 col-sm-6 col-md-3 px-0">
                            <img src="http://demos.themes.guide/bodeo/assets/images/users/w102.jpg" alt="Rosemary Porter" class="img-fluid rounded-circle d-block mx-auto">
                        </div>
                        <div class="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span class="fa fa-envelope fa-lg text-danger float-right" title="left you a message"></span>
                            <span class="name lead">Rosemary Porter</span>
                            <br> <span class="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5267 Cackson St"></span>
                            <span class="text-muted">5267 Cackson St</span>
                            <br>
                            <span class="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(497) 160-9776"></span>
                            <span class="text-muted small">(497) 160-9776</span>
                            <br>
                            <span class="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="rosemary.porter@example.com"></span>
                            <span class="text-muted small text-truncate">rosemary.porter@example.com</span>
                            <br>

                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row w-100">
                        <div class="col-12 col-sm-6 col-md-3 px-0">
                            <img src="http://demos.themes.guide/bodeo/assets/images/users/w104.jpg" alt="Debbie Schmidt" class="img-fluid rounded-circle d-block mx-auto">
                        </div>
                        <div class="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <label class="name lead">Debbie Schmidt</label>
                            <br>

                            <span class="fa fa-fw fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="3903 W Alexander Rd"></span>
                            <span class="text-muted">3903 W Alexander Rd</span>
                            <br>

                            <span class="fa fa-fw fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(867) 322-1852"></span>
                            <span class="text-muted small">(867) 322-1852</span>
                            <br>

                            <span class="fa fa-fw fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="debbie.schmidt@example.com"></span>
                            <span class="text-muted small text-truncate">debbie.schmidt@example.com</span>

                        </div>
                    </div>
                </li>
            </ul>
            <!--/contacts list-->
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
