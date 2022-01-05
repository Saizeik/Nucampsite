import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Reserve() {
  return (
    <React.Fragment>
      <div class="d-flex flex-row-reverse bd-highlight">
        <div class="p-2 bd-highlight ">
          <button
            type="button"
            class="btn btn-info text-white btn-lg text-nowrap"
            data-bs-toggle="modal"
            data-bs-target="#reserveModal"
          >
            Reserve Campsite
          </button>
        </div>
      </div>
      <div
        class="modal fade"
        id="reserveModal"
        tabindex="-1"
        aria-labelledby="reserveModalLabel"
        aria-hidden="true"
        role="dialog"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div className="modal-header">
              <h3 class="reserveModalLabel" id="reserveModalLabel">
                Reserve a Campsite
              </h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <div class="container-fluid">
                <form id="reserveForm">
                  <div class="form-group row">
                    <label class="col-sm-6 col-form-label" for="numCampers">
                      Number of Campers
                    </label>
                    <div class="col">
                      <select
                        class="form-control"
                        name="numCampers"
                        id="numCampers"
                      >
                        <option value="">Select...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-6 col-form-label" for="date">
                      Date
                    </label>
                    <div class="col">
                      <input
                        class="form-control"
                        type="date"
                        id="date"
                        name="date"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Campsite Type</label>
                    <div
                      class= "col-2 btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <button
                        type="button"
                        id ="btnClear" 
                        class="btn btn-success"
                        data-bs-toggle="button"
                        autocomplete="off"
                      >
                        Tent
                      </button>

                      <button
                        type="button"
                        id ="btnClear"
                        class="btn btn-primary"
                        data-bs-toggle="button"
                        autocomplete="off"
                      >
                        RV
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <button
                        class="btn btn-secondary"
                        type="button"
                        data-bs-dismiss="modal"
                        a
                        href="./home"
                      >
                        Cancel
                      </button>{" "}
                      <button class="btn btn-primary" type="submit">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Reserve;
