import Router from "next/router";
import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";

const BuyFilter = ({ className = "" }) => {
  // submit handler
  const submitHandler = () => {
    Router.push("/listing-grid-v1");
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group placement">
            <input
              type="text"
              className="form-control "
              placeholder="Location"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            />
            <label className="icon-label">
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick form-select">
              <option>Bedrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
        </li>

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>Price</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider type="buy" />
              </div>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select className="selectpicker w100 form-select show-tick">
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Condo</option>
                <option>House</option>
                <option>Land</option>
                <option>Single Family</option>
              </select>
            </div>
          </div>
        </li>

        {/* <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Advanced <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenities</h4>
                  </div>

                  <CheckBoxFilter />
                </div>

                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li> */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Search
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default BuyFilter;
