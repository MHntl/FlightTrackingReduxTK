import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const ListView = ({ state, setShowDetail, setGetID }) => {
  const handleId = (id) => {
    setShowDetail(true), setGetID(id);
  };

  //-----------------------------
  const [itemOffset, setItemOffset] = useState(0); // fixed: set initial itemOffset to 0
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = state.flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(state.flights.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.flights.length;
    setItemOffset(newOffset);
  };
  //-------------------------
  return (
    <div>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Tail Number</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item?.id}>
              <th scope="row">{index + 1}</th>
              <td>{item?.id}</td>
              <td>{item?.code}</td>
              <td>{item?.lat}</td>
              <td>{item?.lan}</td>
              <td>
                <button onClick={() => handleId(item.id)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageLinkClassName="page-link" // Pasif sayfa bağlantıları için sınıf
        activeClassName="active-page-link" // Aktif sayfa bağlantısı için sınıf
      />
    </div>
  );
};

export default ListView;
