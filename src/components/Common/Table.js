import React, { useState } from "react";
import styled from "@emotion/styled";

const COLUMN_WIDTHS = {
  1: "10%",
  2: "25%",
  3: "40%",
  4: "25%",
};

const Table = ({ startingData, onRowClick }) => {
  const [data, setData] = useState(startingData);
  const [sortingColumn, setSortingColumn] = useState(null);
  const sortData = (column) => {
    let sortOrder = null;
    if (sortingColumn === column) sortOrder = "asc";
    else sortOrder = "desc";

    if (column === "id") {
      const sorted = startingData
        .slice()
        .sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));
      setSortingColumn(sortOrder === "desc" ? column : null);
      setData(sorted);
    }

    if (column === "title") {
      const sorted = startingData
        .slice()
        .sort((a, b) =>
          sortOrder === "asc"
            ? a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            : b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        );
      setSortingColumn(sortOrder === "desc" ? column : null);
      setData(sorted);
    }

    if (column === "body") {
      const sorted = startingData
        .slice()
        .sort((a, b) =>
          sortOrder === "asc"
            ? a.body.toLowerCase().localeCompare(b.body.toLowerCase())
            : b.body.toLowerCase().localeCompare(a.body.toLowerCase())
        );
      setSortingColumn(sortOrder === "desc" ? column : null);
      setData(sorted);
    }

    if (column === "date") {
      const sorted = startingData
        .slice()
        .sort((a, b) =>
          sortOrder === "asc"
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date)
        );
      setSortingColumn(sortOrder === "desc" ? column : null);
      setData(sorted);
    }
  };

  return (
    <Wrapper>
      <Row tableHeader>
        <div
          onClick={() => sortData("id")}
          style={{ flexBasis: "10%", cursor: "pointer" }}
        >
          Id
        </div>
        <div
          onClick={() => sortData("title")}
          style={{ flexBasis: "25%", cursor: "pointer" }}
        >
          Title
        </div>
        <div
          onClick={() => sortData("body")}
          style={{ flexBasis: "40%", cursor: "pointer" }}
        >
          Content
        </div>
        <div
          onClick={() => sortData("date")}
          style={{ flexBasis: "25%", cursor: "pointer" }}
        >
          Last Updated
        </div>
      </Row>
      {data.map((row) => (
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
    backgroundColor: "#9A8873",
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
