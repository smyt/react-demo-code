import React from 'react';
import { CatalogServiceConsumer } from "../catalog-services-context/catalog-service-context"

const withCatalogService = () => (Wrapped) => {
  return (props) => {
    return (
      <CatalogServiceConsumer>
        {
          (catalogService) => {
            return ( <Wrapped {...props}
                              catalogService={catalogService} />
            )
          }
        }
      </CatalogServiceConsumer>
    )
  }
};

export default withCatalogService;
