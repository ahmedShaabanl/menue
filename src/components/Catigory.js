import React from "react";
import { Col, Row } from "react-bootstrap";

function Catigory({ filterCategory, allCatigory }) {
  // filter by category
  const onFilter = (cat) => {
    filterCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCatigory.length >= 1 ? (
          allCatigory.map((cat) => {
            return (
              <div>
                <button onClick={() => onFilter(cat)} className=" btnss  mx-2">{cat}</button>
              </div>
            );
          })
        ) : (
          <h3 className="text-center">لا توجد اصناف</h3>
        )}
      </Col>
    </Row>
  );
}

export default Catigory;
