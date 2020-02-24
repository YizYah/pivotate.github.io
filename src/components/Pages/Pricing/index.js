import React, { Component } from "react";
import Modal from "../../Modal";
import InitialDevelopment from "./Modals/initial-development.js";
import ServiceDetails from "./Modals/pivoting-services-details.js";
import MaintenanceDetails from "./Modals/maintenance-details";
import queryString from "query-string";

import {
  BrowserRouter,
  HashRouter,
  useLocation,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class Pricing extends Component {
  state = {
    modalInitDev: false,
    modalMaintenance: false,
    modalServices: false
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);

    switch (values.modal) {
      case "initial-development":
        this.modalToggleInitDev();
        break;
      case "maintenance":
        this.modalToggleMaintenance();

        break;
      case "services":
        this.modalToggleServices();
        break;
      default:
        break;
    }
  }

  modalToggleInitDev = props => {
    this.setState({
      modalInitDev: !this.state.modalInitDev
    });
    if (!this.state.modalInitDev) {
      this.props.history.push({
        search:
          "?" + new URLSearchParams({ modal: "initial-development" }).toString()
      });
    } else {
      this.props.history.push({
        search: "?" + new URLSearchParams().toString()
      });
    }
  };
  modalToggleMaintenance = props => {
    this.setState({
      modalMaintenance: !this.state.modalMaintenance
    });
    if (!this.state.modalServices) {
      this.props.history.push({
        search: "?" + new URLSearchParams({ modal: "maintenance" }).toString()
      });
    } else {
      this.props.history.push({
        search: "?" + new URLSearchParams().toString()
      });
    }
  };
  modalToggleServices = props => {
    this.setState({
      modalServices: !this.state.modalServices
    });
    if (!this.state.modalServices) {
      this.props.history.push({
        search: "?" + new URLSearchParams({ modal: "services" }).toString()
      });
    } else {
      this.props.history.push({
        search: "?" + new URLSearchParams().toString()
      });
    }
  };
  render() {
    return (
      <>
        <section class="pricing__section triangle triangle--teal">
          <div class="container">
            <h1 class="display-2  has--underline"> SERVICES OFFERED </h1>
            <p>
              Pay only for what you need. I need something else. Pricing is
              subject to change
            </p>
          </div>
        </section>
        {/* Initial Development */}
        <section id="initial-development">
          <div class="container">
            <h2 className="text-center">
              <span className="headline headline--teal">
                {" "}
                INITIAL DEVELOPMENT{" "}
              </span>
            </h2>

            <div className="subheadline text-center">Get it live!</div>
            <div class="flex justify-center">
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Initial consultation.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Initial consultation</div>

                  <div class="pricing__price teal--text">
                    <strong class="teal--text">FREE</strong>
                  </div>

                  <div>
                    <small>per screen</small>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Discounted Initial App Package.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">
                    Discounted Initial App Package
                  </div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$240</strong>
                  </div>
                  <div>
                    <small> per user type </small>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Graphic design.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Graphic design</div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$30</strong>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Development.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Development</div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$30</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="pricing__detail flex justify-center">
              <a
                href="javascript:void(0);"
                onClick={this.modalToggleInitDev}
                className="button button--rounded button--yellow flex justify-center items-center"
              >
                GET DETAILS{" "}
                <img
                  class="pricing__icon"
                  src="../images/pricing/external link.png"
                ></img>
              </a>
            </div>
          </div>
        </section>
        {/* End Initial Development */}

        {/* Pivotating Services */}
        <section class="pivoting-services  triangle--grey triangle triangle--white triangle">
          <div class="container">
            <h2 className="text-center">
              <span className="headline headline--teal">
                {" "}
                PIVOTING SERVICES{" "}
              </span>
            </h2>
            <div className="subheadline text-center">Get it right! </div>

            <div class="flex justify-center">
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Graphics.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Graphics</div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$2-$15</strong>
                  </div>
                  <div>
                    {" "}
                    <small> per screen </small>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Content.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Content </div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$2-$90</strong>
                  </div>
                </div>
              </div>

              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Special Services.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Special Services</div>
                  <div>
                    <small> starting from </small>
                  </div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$30</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="pricing__detail flex justify-center">
              <a
                onClick={this.modalToggleServices}
                href="javascript:void(0);"
                className="button button--rounded button--yellow flex justify-center items-center"
              >
                GET DETAILS{" "}
                <img
                  class="pricing__icon"
                  src="../images/pricing/external link.png"
                ></img>
              </a>
            </div>
          </div>
        </section>
        {/* End Pivotaing Services */}

        {/* Maintenance */}
        <section id="pivoting-services">
          <div class="container">
            <h2 className="text-center">
              <span className="headline headline--teal word-break">
                {" "}
                MAINTENANCE{" "}
              </span>
            </h2>
            <div className="subheadline text-center">Keep it up!</div>
            <div class="flex justify-center">
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Basic maintenance.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Basic maintenance</div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$2-$15 </strong>{" "}
                    <small> per screen </small>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Additional Cloud.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Special Cloud Services</div>
                  <div class="pricing__price">
                    <strong class="teal--text">At cost</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="pricing__detail flex justify-center">
              <a
                onClick={this.modalToggleMaintenance}
                href="javascript:void(0);"
                className="button button--rounded button--yellow flex justify-center items-center"
              >
                GET DETAILS{" "}
                <img
                  class="pricing__icon"
                  src="../images/pricing/external link.png"
                ></img>
              </a>
            </div>{" "}
          </div>
        </section>
        {/* End Maintenance */}

        {this.state.modalInitDev && (
          <Modal fullScreen onClose={this.modalToggleInitDev}>
            <InitialDevelopment> </InitialDevelopment>
          </Modal>
        )}
        {this.state.modalMaintenance && (
          <Modal fullScreen onClose={this.modalToggleMaintenance}>
            <MaintenanceDetails> </MaintenanceDetails>
          </Modal>
        )}
        {this.state.modalServices && (
          <Modal fullScreen onClose={this.modalToggleServices}>
            <ServiceDetails> </ServiceDetails>
          </Modal>
        )}
      </>
    );
  }
}

export default Pricing;
