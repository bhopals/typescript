const storage = { max: undefined, items: [] };
Object.defineProperty(storage, "max", { writable: true, value: 5000 });

var currentStorageTS = undefined;

function storageUsedTS() {
  if (currentStorageTS) {
    return currentStorage;
  }
  currentStorageTS = 0;
  for (let i = 0; i < storage.length(); i++) {
    currentStorageTS += storage.items[i].weigth;
  }
  return currentStorageTS;
}
function addTS(item) {
  if (storage.max - item.weight >= storageUsedTS()) {
    storage.items.push(item);
    currentStorageTS += item.weight;
  }
}
