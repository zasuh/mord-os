import React from "react";
import styled from "@emotion/styled";

const COLUMN_WIDTHS = {
  1: "10%",
  2: "25%",
  3: "40%",
  4: "25%",
};

const Table = ({ startingData, onRowClick, onSort }) => {
  return (
    <Wrapper>
      <Row tableHeader>
        <div
          onClick={() => onSort("id")}
          style={{ flexBasis: "10%", cursor: "pointer" }}
        >
          Id
        </div>
        <div
          onClick={() => onSort("title")}
          style={{ flexBasis: "25%", cursor: "pointer" }}
        >
          Title
        </div>
        <div
          onClick={() => onSort("body")}
          style={{ flexBasis: "40%", cursor: "pointer" }}
        >
          Content
        </div>
        <div
          onClick={() => onSort("date")}
          style={{ flexBasis: "25%", cursor: "pointer" }}
        >
          Last Updated
        </div>
      </Row>
      {startingData.map((row) => (
        <div
          style={{ cursor: "pointer" }}
          key={row.id}
          onClick={() => onRowClick(row)}
        >
          <Row tableRow>
            <Column order={1} data-label="Id">
              {row.id}
            </Column>
            <Column order={2} data-label="Title">
              {row.title}
            </Column>
            <Column order={3} data-label="Body">
              {row.body}
            </Column>
            <Column order={4} data-label="Date">
              {row.date.toLocaleTimeString()}
            </Column>
          </Row>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div({
  width: "calc(100% - 50px)",
  maxHeight: "100%",
  margin: "0 15px",
});

const Row = styled.div(({ tableHeader, tableRow }) => ({
  borderRadius: 8,
  padding: "25px 30px",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 25,

  ...(tableHeader && {
    color: "white",
    backgroundColor: "#689bed",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: "0.03em",
  }),

  ...(tableRow && {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  }),
}));

const Column = styled.div(({ order }) => ({
  flexBasis: COLUMN_WIDTHS[order],
}));

export default Table;
