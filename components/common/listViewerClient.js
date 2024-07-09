"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Spinner from "./spinner";
import Pagination from "./pagination";
import { useSearchParams } from "next/navigation";
import ListViewer from "./listViewer";

const ListViewerClient = ({ loader = <Spinner />, child, fetchData }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  const page = useSearchParams().get("page");

  useEffect(() => {
    const fetchHandler = async () => {
      let query = "";
      if (page) {
        query = `?page=${page}`;
      }
      setLoading(true);
      setError(null);
      try {
        const res = await fetchData(query);
        setData(res.data);
        if (res.pagination) {
          setPagination(res.pagination);
        }
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchHandler();
  }, [fetchData, page]);

  if (loading) return loader;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <ListViewer data={data} child={child} />
      {pagination && <Pagination pagination={pagination} />}
    </>
  );
};

ListViewerClient.propTypes = {
  loader: PropTypes.node,
  child: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default ListViewerClient;
