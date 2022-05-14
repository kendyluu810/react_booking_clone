import "./propertyList.css";
import hotels1 from "../../img/hotels1.jpg"
import hotels2 from "../../img/hotels2.jpg"
import hotels3 from "../../img/hotels3.jpg"
import hotels4 from "../../img/hotels4.jpg"
import hotels5 from "../../img/hotels5.jpg"

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src={hotels1}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={hotels2}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={hotels3}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={hotels4}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={hotels5}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
