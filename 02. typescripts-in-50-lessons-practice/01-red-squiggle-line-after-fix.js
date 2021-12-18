// const storage = { max: undefined, items: [] };
// Object.defineProperty(storage, "max", { writable: true, value: 5000 });
// let currentStorageTS = undefined;
// function storageUsedTS() {
//   if (currentStorageTS) {
//     return currentStorageTS;
//   }
//   currentStorageTS = 0;
//   for (let i = 0; i < storage.items.length; i++) {
//     currentStorageTS += storage.items[i].length;
//   }
//   return currentStorageTS;
// }
// function addTS(item) {
//   if (storage.max - item.weight >= storageUsedTS()) {
//     storage.items.push(item);
//     currentStorageTS += item.weight;
//   }
// }
