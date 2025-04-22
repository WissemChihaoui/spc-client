import { Helmet } from "react-helmet-async";
import SpaDetailsView from "../../sections/spa-details/spa-details-view";

// ----------------------------------------------------------------------

const metadata = { title: "Accueil - SPC" };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
     <SpaDetailsView />
    </>
  );
}
