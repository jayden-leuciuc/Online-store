import { createSelector } from 'reselect';

const selectHardware = (state) => state.hardware;

export const selectHardwareCollections = createSelector(
  [selectHardware],
  (shop) => shop.collections
);

export const selectHardwareCollectionsForPreview = createSelector(
  [selectHardwareCollection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectHardwareCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsHardwareCollectionFetching = createSelector(
  [selectHardware],
  (shop) => shop.isFetching
);

export const selectIsHardwareCollectionsLoaded = createSelector(
  [selectHardware],
  (shop) => !!shop.collections
);
