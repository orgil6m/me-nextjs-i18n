import { Suspense } from "react";
import Spinner from "./spinner";
import ListViewer from "./listViewer";

const ListViewerServer = async ({ fetchData, child, loader = <Spinner /> }) => {
  return (
    <Suspense fallback={loader}>
      <ListViewerFetcher child={child} fetchData={fetchData} />
    </Suspense>
  );
};

const ListViewerFetcher = async ({ fetchData, child }) => {
  const data = await fetchData();
  return <ListViewer child={child} data={data} />;
};
export default ListViewerServer;
